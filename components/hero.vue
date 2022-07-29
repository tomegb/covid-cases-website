<template>
<div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="mockup-phone">
  <div class="camera"></div> 
  <div class="display">
    <div class="artboard artboard-demo phone-1"><img src="" class="max-w-sm rounded-lg" /></div>
  </div>
</div>
    <div>
      <h1 class="text-5xl font-bold">Covid Cases</h1>
      <p class="py-6">Website that evaluates the current corona cases and makes them available to the public.</p>
      <NuxtLink :to="'/dashboard'" class="btn btn-primary">Dashboard</NuxtLink>
    </div>
  </div>
</div>
</template>