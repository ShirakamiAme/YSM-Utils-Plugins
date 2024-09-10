import PACKAGE from '../package.json'

BBPlugin.register(PACKAGE.name, {
    title: PACKAGE.title,
    author: PACKAGE.author,
    description: PACKAGE.description,
    icon: 'card_membership',
    variant: 'desktop',
    version: PACKAGE.version,
    min_version: PACKAGE.min_blockbench_version,
    tags: ['Minecraft: Java Edition', 'Yes Steve Model', 'Mod'],
    await_loading: true,
    onload() {
    },
    onunload() {
    },
    oninstall() {
    },
    onuninstall() {
    },
})