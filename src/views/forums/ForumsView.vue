<template>
    <div class="forums_background">
        <div class="title_forums_header">Forums</div>

            <div class="div_background">

                <div>
                    <div>
                        <div data-v-2d56389d="" class="heading">
                            <!-- <div style="width: 60%;" class="header_category">Category Name</div> -->
                            <!-- <div style="width: 20%;" class="width_category" >Posts</div> -->
                            <!-- <div style="width: 20%;" class="width_category">Last Post</div> -->
                            <table>

                                <tr >
                                    <div class="header_sb">
                                        <th class="table_head_category">Category Name - Sub Category Name</th>
                                        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                        <th class="table_head_post">Replies</th>
                                        <th class="table_head_last_post">Last Post</th>
                                    </div>
                                   
                                    
                                </tr>

                                

                                <!-- <tr class="odd_view">
                                    <td><div class="table_content_query">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Morbi Nec Maximus Neque. Maecenas Ut Pulvinar Est. Maecenas Tincid</div></td>
                                    <td><div class="table_content_time">12:00AM</div></td>

                                    <td>
                                        <div class="table_content_date">
                                            <div class="table_content_time">27-7-2021</div>
                                        </div>
                                    </td>
                                
                                
                                </tr> -->

                            </table>
                            
                        </div>
                    </div>
    

                    <!--  -->


                    <div class="faq_list_a">
                        <div class="faq_list">
                            <div class="circle" ></div>
                            <div style="display: table-cell; vertical-align: middle; margin-left: 10px; font: normal normal bold 18px/34px Poppins;" >User Name</div>
                        </div>
                        <div class="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</div>
                        <div class="tnx" >
                            <div >Thanks to:</div>
                            <div >Name Enter here</div>
                        </div>
                    </div>

                     <!--  -->


                     <div class="faq_list_a">
                        <div class="faq_list">
                            <div class="circle" ></div>
                            <div style="display: table-cell; vertical-align: middle; margin-left: 10px;font: normal normal bold 18px/34px Poppins;" >User Name</div>
                        </div>
                        <div class="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</div>
                        <div class="tnx" >
                            <div >Thanks to:</div>
                            <div >Name Enter here</div>
                        </div>
                    </div>

                    

                    
                   
                </div>

                

                
                

                

                

            </div>

            <!--  -->

            
        </div>
</template>

<script>
export default {
    name: 'Forumsview',
}
</script>

<style scoped>
.forums_background{
    padding: 25px;
    background: transparent linear-gradient(26deg, #45108A 2%, #3D065F 29%, #12054E 100%, #10054D 100%);
    margin:  10px;
}

.title_forums_header{
padding: 10px;
text-align: left;
font: normal normal normal 18px/34px Poppins;
letter-spacing: 0px;
color: #FFFFFF;
}
.div_background {
    margin-top: 20px;
    padding: 25px;
    border-radius: 8px;
    background: #1E0741;
}
.heading[data-v-2d56389d] {
    padding-bottom: 10px;
    border-bottom: 1px solid #fff;
    font: normal normal normal 18px/34px Poppins;
    letter-spacing: 0;
    color: #f9f9f9;
    display: flex;
    margin-top: 20px;
    flex-wrap: nowrap;
}





.table_head_category{
width: 780px;
text-align: left;
font: normal normal 600 16px/25px Poppins;
letter-spacing: 0px;
color: #FDFDFD;
text-transform: capitalize;
}

.table_head_post{
min-width: 280px;
align-items: center;
text-align: left;
font:normal normal normal 18px/27px Poppins;
letter-spacing: 0px;
margin-left: 25px;
color: #FDFDFD;
text-transform: capitalize;
}

.table_head_last_post{
width: 250px;
border-top-right-radius: 25px;
align-items: center;
font: normal normal normal 18px/34px Poppins;
letter-spacing: 0px;
color: #FDFDFD;
text-transform: capitalize;
}





.align_flex{
    width: 450px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
}

.faq_list {
    border-radius: 8px;
    font: normal normal normal 18px/34px Poppins;
    color: white;
    background: #300B69;
    display: flex;
    flex-wrap: nowrap;
}

.faq_list_a {
    margin-top: 20px;
    padding: 25px;
    border-radius: 8px;
    font: normal normal normal 18px/34px Poppins;
    color: white;
    background: #300B69;
    
}

/* Shapes */
.circle {
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%
}

.center_align{
    height: 40px;
    text-align: center;
    align-items: center;
}

.lorem{
    margin-top: 15px;
    font: normal normal normal 18px/34px Poppins;
}
.tnx{
    margin-top: 15px;
    font: normal normal normal 18px/34px Poppins;
}
</style>