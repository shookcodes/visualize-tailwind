<template>
  <div class="border-8 border-black">
    <div v-for="(position, index) in insetValues" :key="position">
      <div v-if="index === 0">
        <ol v-for="size in pxValues" :key="size">
          <li class="bg-gray-200">{{ position }}-{{ size }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { insetValues, pxValues } from '@/utils/tailwind'

console.log('TW', insetValues)
</script>
