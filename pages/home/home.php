<!-- Page Content -->
<div class="container" id="sectionApp">

    <div class="row">

        <div class="col-lg-12">

            <div class="row">
                <div class="col-12" style="padding:14px;">
                    <div class="form-group" style="width:100%;">
                        <input type="text" class="form-control" placeholder="Initial Value" v-model="textInitial">
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <button type="button" class="btn btn-success btn-block" @click="initValue()">Initial Value</button>
            </div>

            <div style="margin-bottom: 30px;" v-if="stringValueRaw.length">
                <h3>Initial Value</h3>
                <ul>
                    <li v-for="(initString, index) of stringValueRaw">
                        {{ initString }}
                    </li>
                </ul>
            </div>

        </div>
        <!-- /.col-lg-12 -->

        <div class="col-lg-12" v-if="stringValueRaw.length">

            <div class="row">
                <div class="col-12" style="padding:14px;">
                    <div class="form-group" style="width:100%;">
                        <input type="text" class="form-control" placeholder="Ask Me" v-model="textAskMe">
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <button type="button" class="btn btn-info btn-block" @click="checkValue()">Check</button>
                {{ v.finalValue }}
            </div>

        </div>
        <!-- /.col-lg-12 -->

    </div>
    <!-- /.row -->

</div>
<!-- /.container -->

<script src="home/home.js"></script>