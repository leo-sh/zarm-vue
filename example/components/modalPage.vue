<template lang="html">
  <Container class="modal-page">
    <PageHeader title="模态框 Modal" />
    <main>
      <div>
        <za-panel>
          <za-panel-header title="基本"/>
          <za-panel-body>
            <za-cell>
              <za-button slot='description' size='xs' @click='visible1 = true'>开启</za-button>
              普通
            </za-cell>

            <za-cell>
              <za-button slot='description' size='xs' @click='visible2 = true'>开启</za-button>
              圆角
            </za-cell>

            <za-cell>
              <za-button slot='description' size='xs' @click='visible3 = true'>开启</za-button>
              遮罩层可关闭
            </za-cell>

            <za-cell>
              <za-button slot='description' size='xs' @click='visible4 = true'>开启</za-button>
              无头部
            </za-cell>

            <za-cell>
              <za-button slot='description' size='xs' @click='visible5 = true'>开启</za-button>
              动画效果
            </za-cell>

          </za-panel-body>
        </za-panel>

        <za-panel>
          <za-panel-header title="特定场景"/>
          <za-panel-body>
            <za-cell>
              <za-button slot='description' size='xs' @click='visible6 = true' theme="warning">开启</za-button>
              警告框 Alert
            </za-cell>

            <za-cell>
              <za-button slot='description' size='xs' @click='visible7 = true' theme="warning">开启</za-button>
              确认框 Confirm
            </za-cell>
          </za-panel-body>
        </za-panel>

      </div>

      <za-modal :visible.sync='visible1' @close='handleClose' title="标题" :showClose='true'>
        模态框内容
      </za-modal>

      <za-modal :visible.sync='visible2' @close='handleClose' radius :showClose='true'>
        <div slot='title' style='textAlign:left'>标题</div>
        模态框内容
      </za-modal>

      <za-modal :visible.sync='visible3' @close='handleClose' :close-on-click-modal='true' title="标题" :showClose='true' >
        遮罩层可关闭
      </za-modal>

      <za-modal :visible.sync='visible4' @close='handleClose' :closeOnClickModal='true'>
        无头部
      </za-modal>

      <za-modal :visible.sync='visible5' @close='handleClose' animationType="rotate" :closeOnClickModal='true' title="标题" :showClose='true'>
        当前使用的是rotate旋转效果。<br /><br />
        支持多种动画效果：<br />
        zoom：缩放效果（默认）<br />
        rotate：旋转效果<br />
        fade：淡出淡入效果<br />
        door：开关门效果<br />
        flip：翻转效果<br />
        moveUp、moveDown、moveLeft、moveRight：移出移入效果<br />
        slideUp、slideDown、slideLeft、slideRight：滑出滑入效果<br />
      </za-modal>

      <za-alert :visible.sync='visible6' radius title="警告" message="这里是警告信息" @close='handleClose'></za-alert>
      <za-confirm :visible='visible7' title="确认信息" message="你确定要这样做吗？" :ok='handleOk' :cancel='handleCancel'></za-confirm>
    </main>
    <PageFooter />
  </Container>
</template>

<script>
import Container from '../common/Container.vue';
import PageHeader from '../common/PageHeader.vue';
import PageFooter from '../common/PageFooter.vue';
import '../styles/pages/BadgePage.scss';

export default {
  components: {
    Container,
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
    };
  },
  methods: {
    handleClose(reason, event){
      console.log(reason, event);
    },
    handleOk(){
      alert('ok')
    },
    handleCancel(){
      this.visible7 = false
    }
  },
};
</script>
