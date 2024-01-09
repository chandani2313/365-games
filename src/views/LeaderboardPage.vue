<template>
  <div class="leaderBoard">
    <div class="flex_wraper">
      <div class="title_wrapper">Leaderboards</div>
      <div class="inner_wrapright">
        <div class="drop_down mobile">
          <div class="search_icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8369 10.8951L15.813 14.8711C16.0655 15.1325 16.0618 15.548 15.8049 15.8049C15.548 16.0618 15.1325 16.0655 14.8711 15.813L10.8951 11.8369C8.14279 14.0873 4.10938 13.7843 1.72428 11.1479C-0.660827 8.51154 -0.559726 4.46803 1.95415 1.95415C4.46803 -0.559726 8.51154 -0.660827 11.1479 1.72428C13.7843 4.10938 14.0873 8.14279 11.8369 10.8951ZM1.35357 6.68252C1.35357 9.62562 3.73942 12.0115 6.68252 12.0115C9.62425 12.0082 12.0082 9.62425 12.0115 6.68252C12.0115 3.73942 9.62562 1.35357 6.68252 1.35357C3.73942 1.35357 1.35357 3.73942 1.35357 6.68252Z" fill="white"/>
</svg></div>
         <div class="dropdown_buttons">
                    <div class="recent_dropdown">
                        Current<img src="../assets/LeaderboardPage/arrow-square-down.svg" style="padding-left: 15px;display: flex;align-items: center;">
                    </div>
                    <div class="recent_dropdown">
                        Select Game<img src="../assets/LeaderboardPage/arrow-square-down.svg" style="padding-left: 15px;display: flex;align-items: center;">
                    </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inner_container">
        <div class="list">
            <table class="ranking">
                <tr class="header_wrap">
                    <th class="header_rank">Rank</th>
                    <th>Evolution</th>
                    <th class="header_name">Name</th>
                    <th>Country</th>
                    <th>Game Name</th>
                    <th>Total Points</th>
                    <th> </th>
                </tr>

                <tr>
                <td class="table_data"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1485_576)">
                  <path d="M4.06094 -0.0574207C3.13282 0.239063 2.38516 1.00606 2.11446 1.94063C1.96621 2.43691 1.95977 8.37949 2.10801 9.2625C2.50762 11.7439 3.92559 14.0127 5.98164 15.4693C6.62618 15.9334 7.73477 16.4941 8.45664 16.7326L8.94004 16.8873L9.35899 17.6865C10.1904 19.2527 11.0348 20.3807 12.3045 21.6117C12.9104 22.1982 13.1231 22.4432 13.2842 22.7719C13.5227 23.2617 13.6129 23.8611 13.5356 24.4863C13.3873 25.7174 12.3238 26.7873 11.0863 26.9484C10.8543 26.9807 13.1746 27 16.5133 27C19.7939 27 22.1723 26.9807 21.9402 26.9484C21.0508 26.8324 20.1871 26.1814 19.7488 25.2855C19.5168 24.8021 19.5104 24.7828 19.5104 24.0223C19.5104 23.2682 19.5168 23.2295 19.7295 22.8041C19.91 22.4432 20.0969 22.2176 20.7221 21.6117C21.9982 20.3742 22.8426 19.2463 23.6676 17.6801L24.0865 16.8744L24.6279 16.6939C25.8977 16.275 27.0578 15.5531 28.102 14.5541C28.4693 14.1996 28.9592 13.6582 29.1848 13.3617C29.6811 12.6979 30.2869 11.5312 30.5512 10.7385C30.9766 9.46875 30.9701 9.52031 30.9959 5.78203C31.0152 3.37793 31.0023 2.28223 30.9508 2.07598C30.693 1.06406 29.9131 0.251953 28.8689 -0.0638676C28.5016 -0.173437 28.3082 -0.192774 27.741 -0.166992C26.8322 -0.128321 26.2006 0.0908203 24.673 0.87715C24.035 1.21231 23.3324 1.54102 23.1197 1.60547C22.7588 1.71504 22.3527 1.72149 16.4811 1.72149H10.2291L9.71993 1.54102C9.44278 1.44434 8.83692 1.16074 8.37286 0.909376C7.31582 0.342188 6.75508 0.103712 6.10411 -0.0574207C5.43379 -0.218554 4.56368 -0.218554 4.06094 -0.0574207ZM5.89786 1.97285C6.15567 2.05664 6.81309 2.35957 7.36094 2.64961C8.40508 3.19102 9.03672 3.45527 9.55235 3.56484C9.84883 3.6293 9.86817 3.64219 10.0873 4.09336C10.2162 4.35117 10.5707 4.87324 10.8801 5.26641C11.6213 6.20742 11.6342 6.24609 11.602 6.84551C11.5633 7.51582 11.299 8.07012 10.7834 8.59219C10.1453 9.22383 9.417 9.48164 8.20528 9.48809H7.79922L7.83145 11.2412C7.85723 12.6398 7.8959 13.1361 7.99903 13.6775C8.06993 14.0449 8.11504 14.3607 8.10215 14.3736C8.06348 14.4187 7.47696 14.0771 7.0709 13.7742C5.78184 12.8074 4.78926 11.4152 4.31231 9.89414C4.00293 8.90801 3.97715 8.61797 3.97715 5.49199V2.55938L4.13184 2.30801C4.45411 1.78594 5.02774 1.68281 5.89786 1.97285ZM28.392 1.88906C28.4693 1.92773 28.624 2.0502 28.74 2.15977C29.0816 2.48203 29.101 2.72051 29.0623 5.84649C29.0365 8.2957 29.0172 8.68242 28.9012 9.19805C28.566 10.7063 27.7926 12.0855 26.6647 13.1555C26.0975 13.6904 24.8857 14.5283 24.8922 14.3672C24.8922 14.3607 24.9566 14.0514 25.0275 13.6775C25.1371 13.1361 25.1693 12.6527 25.1951 11.2412L25.2273 9.48809H24.8213C23.6096 9.48164 22.8813 9.22383 22.2432 8.59219C21.7275 8.07012 21.4633 7.51582 21.4246 6.84551C21.3924 6.24609 21.4053 6.20742 22.1465 5.26641C22.4559 4.87324 22.8104 4.35117 22.9393 4.09336L23.1777 3.63574L23.732 3.4875C24.1059 3.39082 24.6602 3.1459 25.4723 2.7334C26.1297 2.39824 26.8516 2.05664 27.0836 1.97285C27.5412 1.80527 28.16 1.7666 28.392 1.88906ZM17.1449 9.62988C17.7766 9.79102 18.492 10.4291 18.8658 11.1639C19.2397 11.8986 19.317 12.2854 19.317 13.3553C19.317 14.2318 19.2977 14.4123 19.1688 14.8055C18.8272 15.8238 18.2406 16.5779 17.5059 16.9389C17.1643 17.1064 17.0611 17.1258 16.5133 17.1258C15.9654 17.1258 15.8623 17.1064 15.5143 16.9389C14.7859 16.5844 14.1994 15.8303 13.8578 14.8055C13.7289 14.4123 13.7096 14.2318 13.7096 13.3553C13.7096 12.4787 13.7289 12.2982 13.8578 11.9051C14.2961 10.5902 15.1533 9.72012 16.1717 9.55898C16.5068 9.50742 16.7066 9.52031 17.1449 9.62988Z" fill="url(#paint0_linear_1485_576)"/>
                  <path d="M9.73438 31.0664V33H16.502H23.2695V31.0664V29.1328H16.502H9.73438V31.0664Z" fill="url(#paint1_linear_1485_576)"/>
                  <ellipse cx="17.0053" cy="13.7838" rx="3.72256" ry="4.62805" fill="url(#paint2_linear_1485_576)"/>
                  <path d="M12.9532 8.3074C12.805 8.40838 12.7384 8.63396 12.8157 8.7822C12.8973 8.93904 13.3485 9.52771 13.413 9.56209C13.4538 9.58357 13.5311 9.59861 13.602 9.59861C13.8255 9.60076 13.9651 9.45466 13.9651 9.21834C13.9651 9.11091 13.9544 9.08298 13.8663 8.95408C13.63 8.61033 13.4044 8.32244 13.3442 8.29021C13.2432 8.23865 13.0413 8.24724 12.9532 8.3074Z" fill="white"/>
                  <path d="M19.6451 8.29871C19.5871 8.33523 19.1961 8.84226 19.078 9.03562C19.0242 9.12371 19.02 9.30633 19.0715 9.4116C19.0908 9.45242 19.1446 9.51258 19.1918 9.54265C19.3014 9.6157 19.4797 9.62215 19.5914 9.55769C19.658 9.51687 20.1049 8.93465 20.1844 8.78211C20.2617 8.63387 20.1951 8.40828 20.0469 8.3073C19.9502 8.24285 19.744 8.23855 19.6451 8.29871Z" fill="white"/>
                  <path d="M16.264 8.84862C16.1029 8.89374 15.9912 8.96464 15.8687 9.09569C15.7828 9.18593 15.6925 9.35565 15.338 10.0754C15.1038 10.5523 14.9083 10.9433 14.904 10.9433C14.8203 10.9433 12.9812 11.2291 12.9167 11.2527C12.5408 11.3881 12.3044 11.8027 12.3753 12.2088C12.4205 12.473 12.4484 12.5074 13.2197 13.2658L13.9308 13.9662L13.774 14.8857C13.5935 15.932 13.5871 16.0502 13.6923 16.2779C13.7632 16.4348 13.9372 16.6109 14.1027 16.6904C14.2101 16.742 14.266 16.7549 14.4314 16.7613C14.5732 16.7678 14.6591 16.7613 14.7322 16.7377C14.7902 16.7183 15.2048 16.51 15.656 16.2736C16.105 16.0351 16.4874 15.8418 16.5025 15.8418C16.5154 15.8418 16.8956 16.0351 17.3468 16.2736C17.798 16.51 18.2105 16.7183 18.2685 16.7377C18.3415 16.7613 18.4275 16.7678 18.5693 16.7613C18.7347 16.7549 18.7906 16.742 18.898 16.6904C19.0634 16.6109 19.2374 16.4348 19.3083 16.2779C19.4136 16.0502 19.4072 15.9299 19.2267 14.8836L19.0699 13.9662L19.7831 13.2658C20.5544 12.5074 20.5759 12.4816 20.6275 12.2023C20.6984 11.8113 20.4556 11.3859 20.0839 11.2527C20.0324 11.2355 19.6005 11.1625 19.1214 11.0916C18.6423 11.0228 18.2148 10.9584 18.1697 10.9519L18.088 10.9391L17.6519 10.056C17.2265 9.19022 17.2136 9.16874 17.0847 9.04843C16.9988 8.96894 16.9107 8.91093 16.829 8.88085C16.6658 8.81854 16.4208 8.80565 16.264 8.84862Z" fill="white"/>
                  <path d="M11.5758 14.3015C11.073 14.4691 11 14.5271 11 14.7678C11 14.9912 11.1396 15.1416 11.3502 15.1416C11.507 15.1437 12.2547 14.8945 12.3385 14.815C12.4395 14.7205 12.4674 14.6474 12.4566 14.5057C12.4459 14.366 12.4029 14.293 12.2891 14.2135C12.1709 14.134 12.0377 14.1512 11.5758 14.3015Z" fill="white"/>
                  <path d="M20.7105 14.2134C20.5945 14.2929 20.5537 14.3659 20.543 14.5077C20.5322 14.6495 20.5816 14.7655 20.6805 14.8386C20.7084 14.8601 20.9297 14.9417 21.1681 15.0169C21.5205 15.1308 21.6172 15.1544 21.6881 15.1437C21.8793 15.1136 21.9996 14.9696 21.9996 14.7677C21.9996 14.5249 21.918 14.4626 21.4002 14.295C20.9426 14.1489 20.8265 14.136 20.7105 14.2134Z" fill="white"/>
                  <path d="M16.3066 17.3071C16.1391 17.4231 16.1133 17.509 16.1133 18.001C16.1133 18.493 16.1391 18.5789 16.3066 18.6949C16.4055 18.7615 16.5945 18.7615 16.6934 18.6928C16.8609 18.5789 16.8867 18.493 16.8867 18.001C16.8867 17.799 16.876 17.5971 16.8652 17.552C16.8244 17.3694 16.6848 17.2598 16.5 17.2598C16.4076 17.2598 16.3604 17.2727 16.3066 17.3071Z" fill="white"/>
                  </g><defs><linearGradient id="paint0_linear_1485_576" x1="16.5022" y1="27" x2="16.5022" y2="-0.17827" gradientUnits="userSpaceOnUse"><stop stop-color="#9672FF"/>
                  <stop offset="1" stop-color="#6E52EA"/></linearGradient><linearGradient id="paint1_linear_1485_576" x1="16.502" y1="33" x2="16.502" y2="29.1328" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9672FF"/><stop offset="1" stop-color="#6E52EA"/></linearGradient><linearGradient id="paint2_linear_1485_576" x1="17.0053" y1="9.15576" x2="17.0053" y2="18.4119" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9672FF"/><stop offset="1" stop-color="#6E52EA"/></linearGradient><clipPath id="clip0_1485_576"><rect width="33" height="33" fill="white"/></clipPath></defs></svg></td>
                
                <td><div class="player_evolution"><svg width="19" height="39" viewBox="0 0 19 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.76795 3C8.53775 1.66667 10.4623 1.66667 11.2321 3L15.9952 11.25C16.765 12.5833 15.8027 14.25 14.2631 14.25H4.73686C3.19726 14.25 2.23501 12.5833 3.00481 11.25L7.76795 3Z" fill="#44FD89"/>
                  <path d="M9.92 25.05H8.03V26.99H6.71V25.05H4.82V23.83H6.71V21.89H8.03V23.83H9.92V25.05ZM11.0983 22V20.71H13.5083V28H12.0683V22H11.0983Z" fill="white"/></svg></div></td>
                
                <td><div class="player_name1"><td>
                                        <div class="player_wrap">
                                            <div class="player_img"></div>
                                            <div class="player_content">
                                              <div class="player_name">Soosafe</div>  
                                            </div>
                                        </div>
                                    </td>
                 </div></td>
                    <td><div class="player_name">United States</div></td>
                    <td><div class="player_name">Fortnite</div></td>
                    <td><div class="player_name">12,39,013</div></td>
                    <td><div class="player_name"><svg width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="white"/><circle cx="2" cy="11" r="2" fill="white"/><circle cx="2" cy="20" r="2" fill="white"/></svg></div></td>
                </tr>
                 <tr>
                    <td class="table_space" colspan="8"></td>
                </tr>

                 <tr>
                <td class="table_data">2</td>     
                <td><div class="player_evolution"><svg width="19" height="39" viewBox="0 0 19 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.76795 3C8.53775 1.66667 10.4623 1.66667 11.2321 3L15.9952 11.25C16.765 12.5833 15.8027 14.25 14.2631 14.25H4.73686C3.19726 14.25 2.23501 12.5833 3.00481 11.25L7.76795 3Z" fill="#44FD89"/>
                  <path d="M9.92 25.05H8.03V26.99H6.71V25.05H4.82V23.83H6.71V21.89H8.03V23.83H9.92V25.05ZM11.0983 22V20.71H13.5083V28H12.0683V22H11.0983Z" fill="white"/></svg></div></td>
                
                <td><div class="player_name1"><td>
                                        <div class="player_wrap">
                                            <div class="player_img"></div>
                                            <div class="player_content">
                                              <div class="player_name">Gwendolyn Danley</div>  
                                            </div>
                                        </div>
                                    </td>
                 </div></td>
                    <td><div class="player_name">America</div></td>
                    <td><div class="player_name">Minecraft</div></td>
                    <td><div class="player_name">12,39,013</div></td>
                    <td><div class="player_name"><svg width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="white"/><circle cx="2" cy="11" r="2" fill="white"/><circle cx="2" cy="20" r="2" fill="white"/></svg></div></td>
                </tr>
                 <tr>
                    <td class="table_space" colspan="8"></td>
                </tr>

                <tr>
                <td class="table_data">3</td>     
                <td><div class="player_evolution"><svg width="19" height="39" viewBox="0 0 19 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.76795 3C8.53775 1.66667 10.4623 1.66667 11.2321 3L15.9952 11.25C16.765 12.5833 15.8027 14.25 14.2631 14.25H4.73686C3.19726 14.25 2.23501 12.5833 3.00481 11.25L7.76795 3Z" fill="#44FD89"/>
                  <path d="M9.92 25.05H8.03V26.99H6.71V25.05H4.82V23.83H6.71V21.89H8.03V23.83H9.92V25.05ZM11.0983 22V20.71H13.5083V28H12.0683V22H11.0983Z" fill="white"/></svg></div></td>
                
                <td><div class="player_name1"><td>
                                        <div class="player_wrap">
                                            <div class="player_img"></div>
                                            <div class="player_content">
                                              <div class="player_name">Jose Deleon</div>  
                                            </div>
                                        </div>
                                    </td>
                 </div></td>
                    <td><div class="player_name">Belgium</div></td>
                    <td><div class="player_name">Fantasy Westward Journey</div></td>
                    <td><div class="player_name">12,39,013</div></td>
                    <td><div class="player_name"><svg width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="white"/><circle cx="2" cy="11" r="2" fill="white"/><circle cx="2" cy="20" r="2" fill="white"/></svg></div></td>
                </tr>
                 <tr>
                    <td class="table_space" colspan="8"></td>
                </tr>

                <tr>
                <td class="table_data">4</td>     
                <td><div class="player_evolution"><svg width="19" height="42" viewBox="0 0 19 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2321 16C10.4623 17.3333 8.53775 17.3333 7.76795 16L3.00481 7.75C2.23501 6.41667 3.19726 4.75 4.73686 4.75L14.2631 4.75C15.8027 4.75 16.765 6.41667 15.9952 7.75L11.2321 16Z" fill="#F63D13"/>
                    <path d="M8.95 26.84V28.02H4.71V26.84H8.95ZM10.1901 25V23.71H12.6001V31H11.1601V25H10.1901Z" fill="white"/></svg></div></td>
                
                <td><div class="player_name1"><td>
                                        <div class="player_wrap">
                                            <div class="player_img"></div>
                                            <div class="player_content">
                                              <div class="player_name">Roberta Hinkle</div>  
                                            </div>
                                        </div>
                                    </td>
                 </div></td>
                    <td><div class="player_name">United States</div></td>
                    <td><div class="player_name">Roblox</div></td>
                    <td><div class="player_name">12,39,013</div></td>
                    <td><div class="player_name"><svg width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="white"/><circle cx="2" cy="11" r="2" fill="white"/><circle cx="2" cy="20" r="2" fill="white"/></svg></div></td>
                </tr>
                 <tr>
                    <td class="table_space" colspan="8"></td>
                </tr>

                <tr>
                <td class="table_data">5</td>     
                <td><div class="player_evolution"><svg width="19" height="39" viewBox="0 0 19 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.76795 3C8.53775 1.66667 10.4623 1.66667 11.2321 3L15.9952 11.25C16.765 12.5833 15.8027 14.25 14.2631 14.25H4.73686C3.19726 14.25 2.23501 12.5833 3.00481 11.25L7.76795 3Z" fill="#44FD89"/>
                  <path d="M9.92 25.05H8.03V26.99H6.71V25.05H4.82V23.83H6.71V21.89H8.03V23.83H9.92V25.05ZM11.0983 22V20.71H13.5083V28H12.0683V22H11.0983Z" fill="white"/></svg></div></td>
                
                <td><div class="player_name1"><td>
                                        <div class="player_wrap">
                                            <div class="player_img"></div>
                                            <div class="player_content">
                                              <div class="player_name">Laura Hymel</div>  
                                            </div>
                                        </div>
                                    </td>
                 </div></td>
                    <td><div class="player_name">	China</div></td>
                    <td><div class="player_name">Happy Farm</div></td>
                    <td><div class="player_name">12,39,013</div></td>
                    <td><div class="player_name"><svg width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="white"/><circle cx="2" cy="11" r="2" fill="white"/><circle cx="2" cy="20" r="2" fill="white"/></svg></div></td>
                </tr>
                 <tr>
                    <td class="table_space" colspan="8"></td>
                </tr>

                <tr>
                <td class="table_data">6</td>     
                <td><div class="player_evolution"><svg width="19" height="39" viewBox="0 0 19 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.76795 3C8.53775 1.66667 10.4623 1.66667 11.2321 3L15.9952 11.25C16.765 12.5833 15.8027 14.25 14.2631 14.25H4.73686C3.19726 14.25 2.23501 12.5833 3.00481 11.25L7.76795 3Z" fill="#44FD89"/>
                  <path d="M9.92 25.05H8.03V26.99H6.71V25.05H4.82V23.83H6.71V21.89H8.03V23.83H9.92V25.05ZM11.0983 22V20.71H13.5083V28H12.0683V22H11.0983Z" fill="white"/></svg></div></td>
                
                <td><div class="player_name1"><td>
                                        <div class="player_wrap">
                                            <div class="player_img"></div>
                                            <div class="player_content">
                                              <div class="player_name">Michael Eche</div>  
                                            </div>
                                        </div>
                                    </td>
                 </div></td>
                    <td><div class="player_name">Egypt</div></td>
                    <td><div class="player_name">Apex Legends</div></td>
                    <td><div class="player_name">12,39,013</div></td>
                    <td><div class="player_name"><svg width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="white"/><circle cx="2" cy="11" r="2" fill="white"/><circle cx="2" cy="20" r="2" fill="white"/></svg></div></td>
                </tr>
                 <tr>
                    <td class="table_space" colspan="8"></td>
                </tr>

                <tr>
                <td class="table_data">7</td>     
                <td><div class="player_evolution"><svg width="19" height="42" viewBox="0 0 19 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2321 16C10.4623 17.3333 8.53775 17.3333 7.76795 16L3.00481 7.75C2.23501 6.41667 3.19726 4.75 4.73686 4.75L14.2631 4.75C15.8027 4.75 16.765 6.41667 15.9952 7.75L11.2321 16Z" fill="#F63D13"/>
                    <path d="M8.95 26.84V28.02H4.71V26.84H8.95ZM10.1901 25V23.71H12.6001V31H11.1601V25H10.1901Z" fill="white"/></svg></div></td>
                
                <td><div class="player_name1"><td>
                                        <div class="player_wrap">
                                            <div class="player_img"></div>
                                            <div class="player_content">
                                              <div class="player_name">Benjin Beau</div>  
                                            </div>
                                        </div>
                                    </td>
                 </div></td>
                    <td><div class="player_name">	France</div></td>
                    <td><div class="player_name">Call of Duty: Warzone</div></td>
                    <td><div class="player_name">12,39,013</div></td>
                    <td><div class="player_name"><svg width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="white"/><circle cx="2" cy="11" r="2" fill="white"/><circle cx="2" cy="20" r="2" fill="white"/></svg></div></td>
                </tr>
                 <tr>
                    <td class="table_space" colspan="8"></td>
                </tr>

                <tr>
                <td class="table_data">8</td>     
                <td><div class="player_evolution"><svg width="19" height="39" viewBox="0 0 19 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.76795 3C8.53775 1.66667 10.4623 1.66667 11.2321 3L15.9952 11.25C16.765 12.5833 15.8027 14.25 14.2631 14.25H4.73686C3.19726 14.25 2.23501 12.5833 3.00481 11.25L7.76795 3Z" fill="#44FD89"/>
                  <path d="M9.92 25.05H8.03V26.99H6.71V25.05H4.82V23.83H6.71V21.89H8.03V23.83H9.92V25.05ZM11.0983 22V20.71H13.5083V28H12.0683V22H11.0983Z" fill="white"/></svg></div></td>
                
                <td><div class="player_name1"><td>
                                        <div class="player_wrap">
                                            <div class="player_img"></div>
                                            <div class="player_content">
                                              <div class="player_name">Elizab. Pola</div>  
                                            </div>
                                        </div>
                                    </td>
                 </div></td>
                    <td><div class="player_name">Bangladesh</div></td>
                    <td><div class="player_name">PUBG</div></td>
                    <td><div class="player_name">12,39,013</div></td>
                    <td><div class="player_name"><svg width="4" height="22" viewBox="0 0 4 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="white"/><circle cx="2" cy="11" r="2" fill="white"/><circle cx="2" cy="20" r="2" fill="white"/></svg></div></td>
                </tr>
                 <tr>
                    <td class="table_space" colspan="8"></td>
                </tr>
            </table>
            <div class="page_wrap">
               <a class="active" href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
            </div>
        </div>
    </div>
</div> 
</template>
  <script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//     setup() {
        
//     },
// })
</script>
<style scoped>
.leaderBoard {
  overflow-x: auto;
   padding: 15px 15px 0px 15px;
  background-image: url("../assets/LeaderboardPage/background.svg");
  background-repeat: no-repeat;

}
.flex_wraper {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
}
.title_wrapper {
  padding: 10px;
  text-align: left;
  color: #ffffff;
  font: 500 22px/33px Poppins;
}
.drop_down{
   display: flex;
    justify-content: space-between;
}
.search_icon{
 margin: 15px 15px 5px 5px;
}
.dropdown_buttons{
    display: flex;
        display: flex;
    column-gap: 22px;
}
.recent_dropdown{
    background: #53525B;
    border-radius: 10px;
    padding: 0px 15px;
    display: flex;
   color:#FFFFFF;
    align-items: center;
    cursor: pointer;
}
.recent_dropdown>img
{
        padding-left: 8px;
}.recent_dropdown{
    background: #53525B;
    border-radius: 10px;
    padding: 0px 15px;
    display: flex;
    /* text-align: center; */
    align-items: center;
    cursor: pointer;
}
.recent_dropdown>img
{
 padding-left: 8px;
}
.header_name{
  text-align: left;
    padding-left: 25px;
}
.header_rank{
  text-align: center;
    padding-left: 25px;
}
.inner_container {
  width: 100%;
  border-radius: 8px;
  padding-bottom: 20px;
 background: transparent;
background-blend-mode: overlay;
background-color: #1d1d1f;
background-image: url("../assets/LeaderboardPage/background.svg");
  background-repeat: no-repeat;
}
.inner_wrapleft {
  display: flex;
}
.list table{
  width: 100%;
  border-collapse: collapse;
 }
.header_wrap{
background-color: rgb(34, 34, 34);
border-radius: 9px 9px 0px 0px;
opacity: 0.99;
}
th,td{
  padding: 8px;
 text-align: left;
}
th{
align-items: left;
font:500 14px/29px Poppins;
color: #787686;
padding: 15px 5px 15px 10px;
background: transparent;
background-blend-mode: overlay;
background-color: #1d1d1f;
background-image: url("../assets/LeaderboardPage/background.svg");
  background-repeat: no-repeat;
}
.table_data{
	color: #B3B8C5;
	font: 600 20px/29px Poppins;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.table_space{
 background: transparent;
background-blend-mode: overlay;
    background-color: #1d1d1f;
background-image: url("../assets/LeaderboardPage/background.svg");
  background-repeat: no-repeat;
}
tr {
 background: linear-gradient(180deg, #282626 0%, rgba(40, 38, 38, 0.4) 100%);
}
.player_img{
min-width: 33px;
min-height: 33px;
margin-right: 10px;
border-radius: 20px;
background: #F1F1F1;
}
.player_wrap{
	display: flex;
	align-items: left;
}
.player_evolution>svg{
margin-top: 10px;
}
.player_name,.player_evolution{
font: 500 13px/29px Poppins;
color: #F1F1F1;
display: flex;
justify-content: left;
}
.player_name1{
font: 500 13px/29px Poppins;
color: #F1F1F1;
}
select:not([multiple]) {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-position: right 50%;
  background-repeat: no-repeat;
  padding: 0.5em;
  padding-right: 1.5em;
  color: white;
  border: 1px solid;
  border-radius: 5px;
}
.page_wrap {
 display: flex;
justify-content: center;
}
.page_wrap a {
  color: #787686;
  padding: 8px 16px;
}
.page_wrap a.active {
  background: linear-gradient(180deg, #7255E9 0%, #7255E9 100%);
  color: white;
  border-radius:20px;
  cursor: pointer;
}
.page_wrap a:hover:not(.active) {
background: linear-gradient(180deg, #7255E9 0%, #7255E9 100%);
border-radius:20px;
cursor: pointer;
}
@media screen and (min-width: 780px) {
 
}
</style>