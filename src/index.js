import {loadI18n} from "./util/i18n.js";
import packageInfo from "../package.json";
import {importModelMenuAction} from "./import/import_model_menu.js";

BBPlugin.register(packageInfo.name, {
    title: packageInfo.title,
    author: packageInfo.author,
    description: packageInfo.description,
    icon: "card_membership",
    variant: "desktop",
    version: packageInfo.version,
    min_version: packageInfo.min_blockbench_version,
    tags: ["Minecraft: Java Edition", "Yes Steve Model", "Mod"],
    await_loading: true,
    onload() {
        doLoadEvent();
    },
    onunload() {
        importModelMenuAction.delete();
    },
    oninstall() {
    },
    onuninstall() {
    },
});

function doLoadEvent() {
    loadI18n();
    new BarMenu("ysm_utils", [
        "ysm_utils.import_model_menu"
    ]);
    MenuBar.update();
}