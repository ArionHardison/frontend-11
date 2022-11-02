<template>
<div>
<!-- Breadcrumb -->
<div class="breadcrumb-bar">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-12 col-12">
                <nav aria-label="breadcrumb" class="page-breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
                        <li class="breadcrumb-item active" aria-current="page">Blank Page</li>
                    </ol>
                </nav>
                <h2 class="breadcrumb-title">Blank Page</h2>
            </div>
        </div>
    </div>
</div>
<!-- /Breadcrumb -->

<!-- Page Content -->
<div class="content" style="min-height: 296.6px !important;">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h5>Blank Page</h5>
            </div>
        </div>
    </div>

</div>		
<!-- /Page Content -->
<Nuxt />
 </div>
</template>

<script>
export default {
	layout: 'withoutanimation',
	mounted() {

	},
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>