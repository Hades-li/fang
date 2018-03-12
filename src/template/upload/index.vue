<template>
    <div class="upload">
        <div>
            <Button class="uploadBtn" icon="plus"  type="primary" size="large">
                <input class="file" type="file" accept="image/jpeg,image/png" v-on:change="upload($event)">
                上传文件
            </Button>
        </div>
        <ul class="imgList">
            <li v-for="url in imgFiles">
                <img v-bind:src="url" alt="">
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "upload",
        props: {
            value: {
                type: Array
            }
        },
        watch: {
            imgFiles(newValue) {
                this.$emit('input', newValue);
            }
        },
        data () {
            return {
                imgFiles: []
            }
        },

        methods: {
            upload (event) {
                const file = event.target.files[0]
                const fd = new FormData()
                if (file) {
                    const msg = this.$Message.loading({
                        content: '正在上传...',
                        duration: 0
                    });
                    fd.append('imgFile', file)
                    this.$axios.post(`${this.$host}/global/imgupload`,fd, {
                        method: 'post',
                        headers: {'Content-Type': 'multipart/form-data'}
                    }).then((res) => {
                        msg()
                        if (res.data.code === 0) {
                            this.imgFiles.push(`${this.$host}${res.data.url}`)
                            this.$Message.success('上传成功');
                        } else {
                            this.$Message.error('上传失败');
                        }
                    }).catch((error) => {
                        msg()
                        this.$Message.error('上传失败');
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .uploadBtn{
        position: relative;
        .file{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    }
    .imgList{
        display: flex;
        margin-top: 10px;
        li{
            width: 100px;
            height: 100px;
            margin-right: 20px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            img{
                max-height: 100%;
            }
        }
    }

</style>
