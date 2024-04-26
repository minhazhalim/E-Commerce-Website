const footerHTML = `
     <footer class="section-footer">
          <div class="footer-container container">
               <div class="content_1">
                    <img src="./images/logo.jpg" alt="logo"/>
                    <p>welcome to minhaz ecomstore, <br/> your ultimate destination for <br/> cutting-edge gadgets!</p>
                    <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="Cards"/>
               </div>
               <div class="content_2">
                    <h4>shopping</h4>
                    <a href="#">computer store</a>
                    <a href="#">laptop store</a>
                    <a href="#">accessories</a>
                    <a href="#">sales & discount</a>
               </div>
               <div class="content_3">
                    <h4>experience</h4>
                    <a href="./contact.html">contact Us</a>
                    <a href="" target="_blank">payment method</a>
                    <a href="" target="_blank">delivery</a>
                    <a href="" target="_blank">return and exchange</a>
               </div>
               <div class="content_4">
                    <h4>newsletter</h4>
                    <p>be the first to know about new <br/> arrivals, sales & promos!</p>
                    <div class="f-mail">
                         <input type="email" placeholder="your email"/>
                         <i class="bx bx-envelope"></i>
                    </div>
                    <hr/>
               </div>
          </div>
          <div class="footer-design">
               <div class="footer-design-text"><p>design and code by minhaz halim zim</p></div>
          </div>
     </footer>
`;
const sectionFooter = document.querySelector('.section-footer');
sectionFooter.insertAdjacentHTML('afterbegin',footerHTML);