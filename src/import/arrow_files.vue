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
    computed: {
        arrowFiles: function () {
            return this.ysmJson["files"]["arrow"];
        }
    }
};
</script>

<template>
    <div class="new-author">
        <button style="width: 100%"> {{ tl("menu.ysm_utils.import_model_menu.files.import") }}</button>

        <div class="new-author-item">
            <p class="title">{{ tl("menu.ysm_utils.import_model_menu.sidebar.arrow_files") }}</p>
            <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.files.arrow.desc") }}</p>

            <div class="li-item">
                <div style="display: flex;">
                    <p class="li-text"> {{ tl("menu.ysm_utils.import_model_menu.files.arrow.model") }}</p>
                    <input class="input" type="text" v-model.trim="arrowFiles['model']" readonly>
                </div>

                <div style="display: flex;">
                    <p class="li-text"> {{ tl("menu.ysm_utils.import_model_menu.files.arrow.texture") }}</p>
                    <input class="input" type="text" v-model.trim="arrowFiles['texture']" readonly>
                </div>

                <div style="display: flex;">
                    <p class="li-text"> {{ tl("menu.ysm_utils.import_model_menu.files.arrow.animation") }}</p>
                    <input class="input" type="text" v-model.trim="arrowFiles['animation']" readonly>
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

.li-text {
    width: 20%;
    margin-top: 7px;
    font-size: 15px;
    color: #8b8b8d
}

.input {
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

.li-item {
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