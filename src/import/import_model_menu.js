import metadataVue from "./metadata.vue";
import propertiesVue from "./properties.vue";
import filesVue from "./files.vue";
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
    let ysmJsonPath = join(packDirectory, "ysm.json");
    let ysmJson = autoParseJSON(fs.readFileSync(ysmJsonPath, "utf8"), true);
    ysmJson = normalization(ysmJson);

    let importModelMenuDialog = new Dialog({
        title: "menu.ysm_utils.import_model_menu.title",
        cancel_on_click_outside: false,
        width: 1000,
        sidebar: {
            pages: {
                "metadata": tl("menu.ysm_utils.import_model_menu.metadata.sidebar.metadata"),
                "properties": tl("menu.ysm_utils.import_model_menu.metadata.sidebar.properties"),
                "files": tl("menu.ysm_utils.import_model_menu.metadata.sidebar.files")
            },
            page: "metadata",
            onPageSwitch(page) {
                importModelMenuDialog.content_vue.type = page;
            }
        },
        component: {
            data() {
                return {
                    importModelMenuDialog: importModelMenuDialog,
                    ysmJson: ysmJson,
                    packDirectory: packDirectory,
                    type: "metadata"
                };
            },
            components: {
                metadataVue: metadataVue,
                propertiesVue: propertiesVue,
                filesVue: filesVue
            },
            template: `
                <div>
                    <metadataVue v-if="this.type==='metadata'"
                                 :import-model-menu-dialog='importModelMenuDialog'
                                 :ysm-json='ysmJson'
                                 :pack-directory='packDirectory'/>
                    <propertiesVue v-if="this.type==='properties'"
                                   :import-model-menu-dialog='importModelMenuDialog'
                                   :ysm-json='ysmJson'
                                   :pack-directory='packDirectory'/>
                    <filesVue v-if="this.type==='files'"
                              :import-model-menu-dialog='importModelMenuDialog'
                              :ysm-json='ysmJson'
                              :pack-directory='packDirectory'/>
                </div>`
        }
    });
    importModelMenuDialog.show();

    if (importModelMenuDialog.object && importModelMenuDialog.object.style) {
        importModelMenuDialog.object.style["max-width"] = "1000px";
        importModelMenuDialog.object.style["min-height"] = "600px";
    }
}

/**
 * 规格化 ysm.json 对象，方便后续 Vue 菜单显示
 */
function normalization(ysmJson) {
    ysmJson["spec"] = 2;

    // metadata 部分
    let metadata = ysmJson["metadata"];

    if (!metadata["tips"]) {
        metadata["tips"] = "";
    }

    if (!metadata["license"]) {
        metadata["license"] = {
            "type": "All Rights Reserved",
            "desc:": ""
        };
    } else if (!metadata["license"]["desc"]) {
        metadata["license"]["desc"] = "";
    }

    if (!metadata["authors"]) {
        metadata["authors"] = [];
    }

    if (!metadata["link"]) {
        metadata["link"] = {};
    }

    // properties 部分
    let properties;
    if (!ysmJson["properties"]) {
        properties = ysmJson["properties"] = {};
    } else {
        properties = ysmJson["properties"];
    }

    if (!properties["height_scale"]) {
        properties["height_scale"] = 0.7;
    }
    if (!properties["width_scale"]) {
        properties["width_scale"] = 0.7;
    }
    if (!properties["extra_animation"]) {
        properties["extra_animation"] = {
            "extra0": "",
            "extra1": "",
            "extra2": "",
            "extra3": "",
            "extra4": "",
            "extra5": "",
            "extra6": "",
            "extra7": ""
        };
    }
    if (!properties["preview_animation"]) {
        properties["preview_animation"] = "idle";
    }
    if (!properties["default_texture"]) {
        properties["default_texture"] = "";
    }
    if (!properties["free"]) {
        properties["free"] = false;
    }
    if (!properties["render_layers_first"]) {
        properties["render_layers_first"] = false;
    }

    // files 部分
    let files = ysmJson["files"];
    // player 部分
    let player = files["player"];
    if (!player["animation"]) {
        player["animation"] = {};
    }

    // arrow 部分
    if (!files["arrow"]) {
        files["arrow"] = {
            "model": "",
            "animation": "",
            "texture": ""
        };
    } else if (!files["arrow"]["animation"]) {
        files["arrow"]["animation"] = "";
    }

    return ysmJson;
}