<script>
import {join} from "path";

export default {
    props: {
        importModelMenuDialog: {
            type: Object,
            required: true
        },
        ysmJson: {
            type: Object,
            required: true
        },
        packDirectory: {
            type: Object,
            required: true
        }
    },
    data() {
        return {};
    },
    methods: {
        join,
        tl
    },
    computed: {}
};
</script>

<template>
    <div>
        <div class="files">
            <div class="files-item">
                <p class="title">{{ tl("menu.ysm_utils.import_model_menu.files.player.model") }}</p>
                <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.files.player.model.desc") }}</p>
                <div style="display: flex;">
                    <p class="model-text"> {{ tl("menu.ysm_utils.import_model_menu.files.player.model.main") }}</p>
                    <input class="model-input" type="text" v-model.trim="ysmJson['files']['player']['model']['main']" readonly>
                </div>
                <div style="display: flex;">
                    <p class="model-text"> {{ tl("menu.ysm_utils.import_model_menu.files.player.model.arm") }}</p>
                    <input class="model-input" type="text" v-model.trim="ysmJson['files']['player']['model']['arm']" readonly>
                </div>
            </div>

            <div class="files-item">
                <p class="title">{{ tl("menu.ysm_utils.import_model_menu.files.player.animation") }}</p>
                <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.files.player.animation.desc") }}</p>
                <div style="display: flex;">
                    <p class="model-text"> {{ tl("menu.ysm_utils.import_model_menu.files.player.animation.main") }}</p>
                    <input class="model-input" type="text" v-model.trim="ysmJson['files']['player']['animation']['main']" readonly>
                </div>
                <div style="display: flex;">
                    <p class="model-text"> {{ tl("menu.ysm_utils.import_model_menu.files.player.animation.arm") }}</p>
                    <input class="model-input" type="text" v-model.trim="ysmJson['files']['player']['animation']['arm']" readonly>
                </div>
                <div style="display: flex;">
                    <p class="model-text"> {{ tl("menu.ysm_utils.import_model_menu.files.player.animation.extra") }}</p>
                    <input class="model-input" type="text" v-model.trim="ysmJson['files']['player']['animation']['extra']" readonly>
                </div>
                <div style="display: flex;">
                    <p class="model-text"> {{ tl("menu.ysm_utils.import_model_menu.files.player.animation.tac") }}</p>
                    <input class="model-input" type="text" v-model.trim="ysmJson['files']['player']['animation']['tac']" readonly>
                </div>
                <div style="display: flex;">
                    <p class="model-text"> {{ tl("menu.ysm_utils.import_model_menu.files.player.animation.carryon") }}</p>
                    <input class="model-input" type="text" v-model.trim="ysmJson['files']['player']['animation']['carryon']" readonly>
                </div>
                <div style="display: flex;">
                    <p class="model-text"> {{ tl("menu.ysm_utils.import_model_menu.files.player.animation.swem") }}</p>
                    <input class="model-input" type="text" v-model.trim="ysmJson['files']['player']['animation']['swem']" readonly>
                </div>
                <div style="display: flex;">
                    <p class="model-text"> {{ tl("menu.ysm_utils.import_model_menu.files.player.animation.parcool") }}</p>
                    <input class="model-input" type="text" v-model.trim="ysmJson['files']['player']['animation']['parcool']" readonly>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.files {
    width: 100%;
    overflow-y: auto;
    padding: 10px 20px
}

.files-item {
    height: 100%;
    width: 100%;
    margin-top: 10px
}

.title {
    margin: 0;
    padding: 0;
    font-size: large
}

.desc {
    margin: 0;
    padding: 0;
    color: #6a6a6d
}

.input {
    border-radius: 1px;
    margin-top: 5px;
    padding: 5px;
    width: 100%;
    height: 40px;
    font-size: 20px;
    background-color: #1c2026;
    border-style: solid;
    border-width: 1px;
    border-color: #181a1f;
}

.model-text {
    width: 20%;
    margin-top: 7px;
    font-size: 15px;
    color: #6a6a6d
}

.model-input {
    flex: 1;
    border-radius: 1px;
    margin-top: 5px;
    padding: 2px 2px 2px 5px;
    height: 30px;
    font-size: 15px;
    background-color: #1c2026;
    border-style: solid;
    border-width: 1px;
    border-color: #181a1f;
}
</style>