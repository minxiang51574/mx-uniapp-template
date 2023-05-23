<template>
  <div>
    <cl-crud ref="Crud">
      <cl-row>
        <!-- 刷新按钮 -->
        <cl-refresh-btn />
        <!-- 新增按钮 -->

        <cl-add-btn />
        <!-- 删除按钮 -->

        <cl-multi-delete-btn />
        <cl-flex1 />
        <!-- 关键字搜索 -->
        <cl-search-key />
      </cl-row>

      <cl-row>
        <!-- 数据表格 -->
        <cl-table ref="Table" />
      </cl-row>

      <cl-row>
        <cl-flex1 />
        <!-- 分页控件 -->
        <cl-pagination />
      </cl-row>

      <!-- 新增、编辑 -->
      <cl-upsert ref="Upsert" />
    </cl-crud>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
