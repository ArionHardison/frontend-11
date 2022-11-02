<template>
<div>
    <div class="page-wrapper">
        <div class="content container-fluid">
            
            <!-- Edit Supplier -->					
            <div class="row">
                <div class="col-md-8">
                    <h5 class="mb-3">Edit Supplier</h5>
                    <form method="post" class="supplier-form">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Name <span class="text-danger">*</span></label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <input type="email" class="form-control floating">
                                    <label class="focus-label">Email <span class="text-danger">*</span></label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Phone <span class="text-danger">*</span></label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group form-focus">
                                    <input type="text" class="form-control floating">
                                    <label class="focus-label">Company <span class="text-danger">*</span></label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group form-focus">
                                    <textarea class="form-control bg-grey floating"></textarea>
                                    <label class="focus-label">Address <span class="text-danger">*</span></label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="change-photo-btn  bg-grey">
                                        <div>
                                            <upload-icon size="1.4x" class="custom-class"></upload-icon>
                                            <p>Upload File</p>
                                        </div>
                                        <input type="file" class="upload">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                    <button type="submit" class="btn btn-primary save-btn">Submit</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <!-- /Edit Supplier -->
        </div>
<Nuxt />
</div>
</template>

<script>
import { UploadIcon } from 'vue-feather-icons'
export default {
    components: {
    UploadIcon
  },
    mounted() {
    if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
    },
    layout: 'superadmin',
	computed: {
       currentPath() {
           return this.$route.name
	   },
	}
}
</script>