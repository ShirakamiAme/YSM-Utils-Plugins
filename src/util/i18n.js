import enLang from "../../assets/lang/en.json";
import zhLang from "../../assets/lang/zh.json";

// 必须要设计成全局调用，否则不能先于菜单加载语言文件
Language.addTranslations("en", enLang);
Language.addTranslations("zh", zhLang);

/**
 * 此方法仅用于打印日志
 */
export function loadI18n() {
    console.log(`[Info] [ysm-utils-plugins] All Plugins Languages loaded.`);
}