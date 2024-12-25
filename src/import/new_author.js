import newAuthorVue from "./new_author.vue";

export function newAuthorDialog(ysmJson, packDirectory) {
    let newAuthorDialog = new Dialog({
        title: "menu.ysm_utils.import_model_menu.metadata.authors.new",
        cancel_on_click_outside: false,
        width: 600,
        component: {
            data() {
                return {
                    authorDialog: newAuthorDialog,
                    authors: ysmJson["metadata"]["authors"],
                    packDirectory: packDirectory
                };
            },
            components: {
                newAuthorVue: newAuthorVue,
            },
            template: `
                <div>
                    <newAuthorVue :new-author-dialog="authorDialog"
                                  :authors="authors"
                                  :pack-directory='packDirectory'/>
                </div>`
        }
    });
    newAuthorDialog.show();
}

export function editAuthorDialog(ysmJson, packDirectory, editAuthor) {
    let newAuthorDialog = new Dialog({
        title: "menu.ysm_utils.import_model_menu.metadata.authors.edit",
        cancel_on_click_outside: false,
        width: 600,
        component: {
            data() {
                return {
                    authorDialog: newAuthorDialog,
                    authors: ysmJson["metadata"]["authors"],
                    editAuthor: editAuthor,
                    packDirectory: packDirectory,
                };
            },
            components: {
                newAuthorVue: newAuthorVue,
            },
            template: `
                <div>
                    <newAuthorVue :new-author-dialog="authorDialog"
                                  :authors="authors" :new-author="editAuthor"
                                  :pack-directory='packDirectory'/>
                </div>`
        }
    });
    newAuthorDialog.show();
}