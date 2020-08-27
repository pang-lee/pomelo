<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12">
                <div class="d-flex justify-content-center my-3">
                    <b-avatar button src="https://placekitten.com/300/300" size="4rem"></b-avatar>&nbsp;&nbsp;
                    <h1>{{ value[0] }}</h1>
                </div>
            </b-col>
            
            <b-col>
                <b-card no-body class="mb-2">
                    <b-card-header header-tag="header" class="p-1">
                        <b-button block v-b-toggle.accordion-1 variant="light">
                            <b>Profile</b>&nbsp;
                            <span class="fa fa-user-circle"></span>
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-1" accordion="my-profile">
                        <b-card-body>
                            <b-container fluid>
                              <b-row class="my-1" v-for="(type, index) in types" :key="type">
                                <b-col sm="3">
                                  <label :for="`type-${type}`">{{ type == 'text' ? 'name' : type == 'tel' ? 'phone' : type }}: {{ value[index] }}</label>
                                </b-col>
                                <b-col sm="9">
                                  <b-form-input v-model="value[index]" :type="type"></b-form-input>
                                </b-col>
                              </b-row>
                            </b-container>
                        </b-card-body>
                    </b-collapse>
                </b-card>

                <b-card no-body class="mb-2">
                    <b-card-header header-tag="header" class="p-1">
                        <b-button block v-b-toggle.accordion-2 variant="light">
                            <b>Record</b>&nbsp;
                            <span class="fa fa-circle-o-notch"></span>
                        </b-button>
                    </b-card-header>
                    <b-collapse id="accordion-2" accordion="my-record">
                        <b-card-body>
                            <b-container fluid>
                              <b-row class="my-1" v-for="(type, index) in types" :key="type">
                                <b-col sm="3">
                                  <label :for="`type-${type}`">{{ type == 'text' ? 'name' : type == 'tel' ? 'phone' : type }}: {{ value[index] }}</label>
                                </b-col>
                                <b-col sm="9">
                                  <b-form-input v-model="value[index]" :type="type"></b-form-input>
                                </b-col>
                              </b-row>
                            </b-container>
                        </b-card-body>
                    </b-collapse>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
module.exports = {
    data() {
        return {
            value:[],
            types: ['text', 'email', 'tel', 'date']
        }
    }
}
</script>

<style></style>