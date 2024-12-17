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
        tl,
        addNewExtraAnimation: function (extraAnimations) {
            extraAnimations[""] = "";
            this.$forceUpdate();
        }
    },
    computed: {}
};
</script>

<template>
    <div>
        <div class="properties">
            <div class="properties-horizontal-item">
                <div style="width: 50%">
                    <p class="title">{{ tl("menu.ysm_utils.import_model_menu.properties.height_scale") }}</p>
                    <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.properties.height_scale.desc") }}</p>
                </div>
                <div style="width: 50%; margin: 0 auto;">
                    <p style="font-size: large">{{ ysmJson["properties"]["height_scale"] }}</p>
                    <input class="range" type="range" max="2" min="0.05" step="0.05"
                           v-model.number="ysmJson['properties']['height_scale']">
                </div>
            </div>

            <div class="properties-horizontal-item">
                <div style="width: 50%">
                    <p class="title">{{ tl("menu.ysm_utils.import_model_menu.properties.width_scale") }}</p>
                    <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.properties.width_scale.desc") }}</p>
                </div>
                <div style="width: 50%; margin: 0 auto;">
                    <p style="font-size: large">{{ ysmJson["properties"]["width_scale"] }}</p>
                    <input class="range" type="range" max="2" min="0.05" step="0.05"
                           v-model.number="ysmJson['properties']['width_scale']">
                </div>
            </div>

            <div class="properties-item">
                <p class="title">{{ tl("menu.ysm_utils.import_model_menu.properties.extra_animation") }}</p>
                <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.properties.extra_animation.desc") }}</p>
                <div style="display: flex; flex-wrap: wrap; margin-top: 10px">
                    <div v-for="(_, animation) in ysmJson['properties']['extra_animation']"
                         style="width: 49%; margin-left: 2px; margin-top: 2px">
                        <select id="simple" name="simple" style="width: 40%; text-align: center;">
                            <option selected>{{ animation }}</option>
                            <option>Cherry</option>
                            <option>Lemon</option>
                        </select>
                        <input class="input" type="text" style="width: 50%; margin-left: 2px;"
                               v-model.trim="ysmJson['properties']['extra_animation'][animation]">
                    </div>
                    <button style="width: 44.8%; margin-left: 2px; margin-top: 2px"
                            @click="addNewExtraAnimation(ysmJson['properties']['extra_animation'])">
                        <i class="fa-solid fa-plus" style="vertical-align: middle;"></i>
                        <span>{{ tl("menu.ysm_utils.import_model_menu.properties.extra_animation.add") }}</span>
                    </button>
                </div>
            </div>

            <div class="properties-horizontal-item">
                <div style="width: 68%">
                    <p class="title">{{ tl("menu.ysm_utils.import_model_menu.properties.preview_animation") }}</p>
                    <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.properties.preview_animation.desc") }}</p>
                </div>
                <div style="width: 20%; margin: 0 auto;">
                    <select style="width: 100%; text-align: center;">
                        <option selected>{{ ysmJson["properties"]["preview_animation"] }}</option>
                        <option>Cherry</option>
                        <option>Lemon</option>
                    </select>
                </div>
            </div>

            <div class="properties-horizontal-item">
                <div style="width: 68%">
                    <p class="title">{{ tl("menu.ysm_utils.import_model_menu.properties.default_texture") }}</p>
                    <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.properties.default_texture.desc") }}</p>
                </div>
                <div style="width: 20%; margin: 0 auto;">
                    <select style="width: 100%; text-align: center;">
                        <option selected>{{ ysmJson["properties"]["default_texture"] }}</option>
                        <option>Cherry</option>
                        <option>Lemon</option>
                    </select>
                </div>
            </div>

            <div class="properties-horizontal-item">
                <div style="width: 68%">
                    <p class="title">{{ tl("menu.ysm_utils.import_model_menu.properties.free") }}</p>
                    <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.properties.free.desc") }}</p>
                </div>
                <div style="width: 20%; margin: 0 auto;">
                    <input type="checkbox" v-model="ysmJson['properties']['free']" style="width: 100%;">
                </div>
            </div>

            <div class="properties-horizontal-item">
                <div style="width: 68%">
                    <p class="title">{{ tl("menu.ysm_utils.import_model_menu.properties.render_layers_first") }}</p>
                    <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.properties.render_layers_first.desc") }}</p>
                </div>
                <div style="width: 20%; margin: 0 auto;">
                    <input type="checkbox" v-model="ysmJson['properties']['render_layers_first']" style="width: 100%;">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.properties {
    width: 100%;
    overflow-y: auto;
    padding: 10px 20px
}

.properties-item {
    height: 100%;
    width: 100%;
    margin-top: 10px
}

.properties-horizontal-item {
    height: 100%;
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
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

.range {
    width: 100%;
}

.input {
    border-radius: 1px;
    padding: 2px 2px 2px 5px;
    width: 100%;
    background-color: #1c2026;
    border-style: solid;
    border-width: 1px;
    border-color: #181a1f;
}
</style>