import importModelMenuVue from "./import_model_menu.vue";
import {join} from "path";
import {oldVersionTransform} from "./old_version_transform.js";

export let importModelMenuAction = new Action("ysm_utils.import_model_menu", {
    name: "menu.ysm_utils.import_model_menu.name",
    icon: "fa-file-alt",
    click: function () {
        electron.dialog.showOpenDialog(currentwindow, {
            title: tl("menu.ysm_utils.import_model_menu.name"),
            properties: ["openDirectory"]
        }).then(result => {
            if (result.canceled) {
                return;
            }
            let selectFilePaths = result.filePaths;
            if (selectFilePaths && selectFilePaths[0] && checkDirectory(selectFilePaths[0])) {
                openImportMenu(selectFilePaths[0]);
            }
        });
    }
});

function doOldVersionTransform(packDirectory, isVersion114) {
    electron.dialog.showOpenDialog(currentwindow, {
        title: tl("menu.ysm_utils.old_version_transform.select_output_directory"),
        properties: ["openDirectory"]
    }).then(result => {
        if (result.canceled) {
            return;
        }
        let selectFilePaths = result.filePaths;
        if (selectFilePaths && selectFilePaths[0]) {
            oldVersionTransform(packDirectory, selectFilePaths[0], isVersion114);
        }
    });
}

function checkDirectory(packDirectory) {
    // 1.2.0 版本格式检查
    let ysmJsonPath = join(packDirectory, "ysm.json");
    if (fs.existsSync(ysmJsonPath)) {
        return true;
    }

    // 1.1.4/1.1.5 版本格式检查
    let versionType = undefined;
    let infoJson = join(packDirectory, "info.json");
    let mainJson = join(packDirectory, "main.json");
    if (fs.existsSync(infoJson)) {
        versionType = "1.1.5";
    } else if (fs.existsSync(mainJson)) {
        versionType = "1.1.4";
    }

    if (versionType) {
        Blockbench.showMessageBox({
            icon: "fa-warning",
            title: tl("level.ysm_utils.warning"),
            message: tl("menu.ysm_utils.import_model_menu.transform_model"),
            width: 600,
            buttons: [tl("dialog.confirm"), tl("dialog.cancel")],
            confirm: 0,
            cancel: 1
        }, (button) => {
            console.log(button);
            if (button === 0) {
                doOldVersionTransform(packDirectory, versionType === "1.1.4");
            }
        });
        return false;
    }

    Blockbench.showMessageBox({
        icon: "fa-warning",
        title: tl("level.ysm_utils.error"),
        message: tl("menu.ysm_utils.import_model_menu.directory_error")
    });

    return false;
}

function openImportMenu(packDirectory) {
    let importModelMenuDialog = new Dialog({
        title: "menu.ysm_utils.import_model_menu.title",
        singleButton: true,
        component: {
            data() {
                return {
                    importModelMenuDialog: importModelMenuDialog
                };
            },
            components: {importModelMenuVue: importModelMenuVue},
            template: "<importModelMenuVue :importModelMenuDialog='importModelMenuDialog'/>"
        }
    });
    importModelMenuDialog.show();
}