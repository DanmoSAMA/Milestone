<template>
  <footer class="c-footer">
    <div class="c-footer-inner">
      <div class="c-footer-inner-arthor">©2022 Danmoits</div>
      <div class="c-footer-inner-sign">天気はいから，散歩しましよ。</div>
      <div class="c-footer-inner-police">
        <a
          href="http://beian.miit.gov.cn/"
          class="c-footer-inner-police-anchor"
        >
          鄂ICP备2021014938号
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts"></script>

<style lang="scss">
.c-footer {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  color: #999999;

  &-inner {
    padding-left: 320px;
    text-align: center;

    &-arthor,
    &-sign,
    &-police {
      line-height: 30px;
    }
  }
}
</style>
