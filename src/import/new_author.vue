<script>
import {join} from "path";

export default {
    props: {
        newAuthorDialog: {
            type: Object,
            required: true
        },
        authors: {
            type: Array,
            required: true
        },
        packDirectory: {
            type: Object,
            required: true
        },
        newAuthor: {
            type: Object,
            default: function () {
                return {
                    "name": "",
                    "avatar": "",
                    "role": "",
                    "contact": {},
                    "comment": ""
                };
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        join,
        tl,
        getImgPath: function () {
            return join(this.packDirectory, this.newAuthor["avatar"]);
        }
    },
    computed: {}
};
</script>

<template>
    <div class="new-author">
        <div class="horizontal-item">
            <div style="width: 40%; margin: 0 auto;">
                <div style="padding: 10px; background-color: #1c2026; width: 200px; height: 200px;">
                    <div v-if="newAuthor['avatar']">
                        <img :src="getImgPath()" alt="img" class="img">
                    </div>
                    <div v-else>
                        <i class="fas fa-images fa-9x" style="margin: 20px 8px"></i>
                    </div>
                </div>
            </div>


            <div style="width: 58%">
                <div style="width: 100%; height: 100%">
                    <p class="title">{{ tl("menu.ysm_utils.import_model_menu.metadata.authors.name") }}</p>
                    <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.metadata.authors.name.desc") }}</p>
                    <input class="input" type="text" v-model.trim="newAuthor['name']">
                </div>


                <div style="width: 100%; height: 100%; margin-top: 10px">
                    <p class="title">{{ tl("menu.ysm_utils.import_model_menu.metadata.authors.role") }}</p>
                    <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.metadata.authors.role.desc") }}</p>
                    <input class="input" type="text" v-model.trim="newAuthor['role']">
                </div>
            </div>
        </div>


        <div class="new-author-item">
            <p class="title">{{ tl("menu.ysm_utils.import_model_menu.metadata.authors.comment") }}</p>
            <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.metadata.authors.comment.desc") }}</p>
            <input class="input" type="text" v-model.trim="newAuthor['comment']">
        </div>


        <div class="new-author-item">
            <p class="title">{{ tl("menu.ysm_utils.import_model_menu.metadata.authors.contact") }}</p>
            <p class="desc">{{ tl("menu.ysm_utils.import_model_menu.metadata.authors.contact.desc") }}</p>

            <div v-for="(_, type) in newAuthor['contact']">
                <input class="input-contact-type" type="text" v-model="type">
                <input class="input-contact" type="text" v-model.trim="newAuthor['contact'][type]">
                <button style="width: 6%; min-width: 5%; padding: 0;">
                    <i class="fas fa-trash-alt" style="margin: 0 auto 3px;"></i>
                </button>
            </div>

            <button style="width: 100%;margin-top: 5px">
                {{ tl("menu.ysm_utils.import_model_menu.metadata.authors.contact.add") }}
            </button>
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
    padding: 2px 2px 2px 5px;
    width: 100%;
    height: 30px;
    font-size: 15px;
    background-color: #1c2026;
    border-style: solid;
    border-width: 1px;
    border-color: #181a1f;
}

.input-contact-type {
    border-radius: 1px;
    margin-top: 5px;
    padding: 2px 2px 2px 5px;
    width: 17%;
    height: 30px;
    font-size: 15px;
    background-color: #1c2026;
    border-style: solid;
    border-width: 1px;
    border-color: #181a1f;
}

.input-contact {
    border-radius: 1px;
    margin-top: 5px;
    padding: 2px 2px 2px 5px;
    width: 75%;
    height: 30px;
    font-size: 15px;
    background-color: #1c2026;
    border-style: solid;
    border-width: 1px;
    border-color: #181a1f;
}

.img {
    width: 180px;
    height: 180px;
}

.horizontal-item {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
}
</style>