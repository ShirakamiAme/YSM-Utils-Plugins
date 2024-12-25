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
        <div>
            <button style="width: 100%">
                {{ tl("menu.ysm_utils.import_model_menu.files.import") }}
            </button>
        </div>

        <div class="new-author">
            <div class="new-author-item">
                <p class="title">{{ tl("menu.ysm_utils.import_model_menu.files.player.model") }}</p>
                <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.files.player.model.desc") }}</p>
                <div class="list-item">
                    <div style="display: flex;">
                        <p class="list-text"> {{ tl("menu.ysm_utils.import_model_menu.files.player.model.main") }}</p>
                        <input class="model-input" type="text"
                               v-model.trim="ysmJson['files']['player']['model']['main']"
                               readonly>
                    </div>
                    <div style="display: flex;">
                        <p class="list-text"> {{ tl("menu.ysm_utils.import_model_menu.files.player.model.arm") }}</p>
                        <input class="model-input" type="text" v-model.trim="ysmJson['files']['player']['model']['arm']"
                               readonly>
                    </div>
                </div>
            </div>

            <div class="new-author-item">
                <p class="title">{{ tl("menu.ysm_utils.import_model_menu.files.player.animation") }}</p>
                <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.files.player.animation.desc") }}</p>
                <div class="list-item">
                    <div style="display: flex;">
                        <p class="list-text"> {{
                                tl("menu.ysm_utils.import_model_menu.files.player.animation.main")
                            }}</p>
                        <input class="model-input" type="text"
                               v-model.trim="ysmJson['files']['player']['animation']['main']" readonly>
                    </div>
                    <div style="display: flex;">
                        <p class="list-text"> {{
                                tl("menu.ysm_utils.import_model_menu.files.player.animation.arm")
                            }}</p>
                        <input class="model-input" type="text"
                               v-model.trim="ysmJson['files']['player']['animation']['arm']"
                               readonly>
                    </div>
                    <div style="display: flex;">
                        <p class="list-text"> {{
                                tl("menu.ysm_utils.import_model_menu.files.player.animation.extra")
                            }}</p>
                        <input class="model-input" type="text"
                               v-model.trim="ysmJson['files']['player']['animation']['extra']" readonly>
                    </div>
                    <div style="display: flex;">
                        <p class="list-text"> {{
                                tl("menu.ysm_utils.import_model_menu.files.player.animation.tac")
                            }}</p>
                        <input class="model-input" type="text"
                               v-model.trim="ysmJson['files']['player']['animation']['tac']"
                               readonly>
                    </div>
                    <div style="display: flex;">
                        <p class="list-text"> {{
                                tl("menu.ysm_utils.import_model_menu.files.player.animation.carryon")
                            }}</p>
                        <input class="model-input" type="text"
                               v-model.trim="ysmJson['files']['player']['animation']['carryon']" readonly>
                    </div>
                    <div style="display: flex;">
                        <p class="list-text"> {{
                                tl("menu.ysm_utils.import_model_menu.files.player.animation.swem")
                            }}</p>
                        <input class="model-input" type="text"
                               v-model.trim="ysmJson['files']['player']['animation']['swem']" readonly>
                    </div>
                    <div style="display: flex;">
                        <p class="list-text">
                            {{ tl("menu.ysm_utils.import_model_menu.files.player.animation.parcool") }}
                        </p>
                        <input class="model-input" type="text"
                               v-model.trim="ysmJson['files']['player']['animation']['parcool']" readonly>
                    </div>
                </div>
            </div>

            <div class="new-author-item">
                <p class="title">{{ tl("menu.ysm_utils.import_model_menu.files.player.texture") }}</p>
                <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.files.player.texture.desc") }}</p>
                <div v-for="texture in ysmJson['files']['player']['texture']" class="list-item">
                    <div style="display: flex;">
                        <p class="list-text">
                            {{ tl("menu.ysm_utils.import_model_menu.files.player.texture.uv") }}
                        </p>
                        <input class="model-input" type="text" v-model.trim="texture['uv']" readonly>
                    </div>

                    <div style="display: flex;">
                        <p class="list-text">
                            {{ tl("menu.ysm_utils.import_model_menu.files.player.texture.normal") }}
                        </p>
                        <input class="model-input" type="text" v-model.trim="texture['normal']" readonly>
                    </div>

                    <div style="display: flex;">
                        <p class="list-text">
                            {{ tl("menu.ysm_utils.import_model_menu.files.player.texture.specular") }}
                        </p>
                        <input class="model-input" type="text" v-model.trim="texture['specular']" readonly>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.new-author {
    width: 100%;
    overflow-y: auto;
    padding: 10px 20px
}

.new-author-item {
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

.list-text {
    width: 20%;
    margin-top: 7px;
    font-size: 15px;
    color: #8b8b8d
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

.list-item {
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px;
    border-radius: 2px;
    border-style: solid;
    border-width: 1px;
    border-color: rgb(24, 26, 31, 0.5);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3)
}
</style>