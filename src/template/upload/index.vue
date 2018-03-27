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
                <img v-bind:src="`${$host}${url}`" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    import lrz from "lrz"
    export default {
        name: "upload",
        props: {
            value: {
                type: Array,
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
                const that = this
                const file = event.target.files[0]
                const fd = new FormData()
                console.log(file)
                console.log("压缩前："　+　file.size)
                lrz(file,{width:300}).then(function (rest) {
                rest.file["name"] = "ic_ga-brnn.png"  

 
                console.log(rest)    
                console.log("压缩前后："　+ rest.file.size)
    
                if(rest.file.size>1024000){
                    that.$Message.error('图片太大（温馨提示：不能超过１Ｍ哟）');
                }else{

                if (rest.file) {
                    const msg = that.$Message.loading({
                        content: '正在上传...',
                        duration: 0
                    });
                    fd.append('imgFile', rest.file, file.name)
                    that.$axios.post(`${that.$host}/global/imgupload`,fd, {
                        method: 'post',
                        headers: {'Content-Type': 'multipart/form-data'}
                    }).then((res) => {
                        msg()
                        if (res.data.code === 0) {
                            that.imgFiles.push(res.data.url)
                            // that.imgFiles.push(`${that.$host}${res.data.url}`)
                            that.$Message.success('上传成功');
                        } else {
                            that.$Message.error('上传失败');
                        }
                    }).catch((error) => {
                        msg()
                        that.$Message.error('上传失败');
                    })
                }
                }

                });



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
