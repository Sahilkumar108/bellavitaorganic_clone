
let footer = () => {
    return `
    <footer>
        <div id="footer">
            <hr>
            <div id="frow1" class="fdf fdp">
                <div id="fr1c1">
                    <div>
                        <p>Sign up to our email list and receive 20% off your next order</p>
                        <a href="./register.html"><button id="signup_button">SIGN UP</button></a>
                    </div>
                    <hr>
                    <div class="fhov">
                        <label for="">Help & Information</label>
                        <div><i class="fa-solid fa-phone"></i><a href="#">Customer Service</a></div>
                        <div><i class="fa-solid fa-truck"></i><a href="#">Delivery Information</a></div>
                        <div><i class="fa-solid fa-arrow-rotate-left"></i><a href="#">Returns & Refunds</a></div>
                        <div><i class="fa-solid fa-question"></i><a href="#">Help Center</a></div>
                        <div><i class="fa-solid fa-arrows-to-circle"></i><a href="#">Track my order</a></div>
                        <div><i class="fa-brands fa-accessible-icon"></i><a href="#">Accessibility</a></div>
                        <div><i class="fa-solid fa-cookie"></i><a href="#">Cookie Settings</a></div>
                    </div>
                </div>
                <div id="fr1c2">
                    <div>
                        <p>Connect with us</p>
                        <p>
                            40Sahilroy@gmail.com
                        </p>
                    </div>
                    <div id="fm" class="fdf">
                        <div>
                            <hr>
                            <label for="">About Bellavita</label>
                            <div><a href="#">Key Workers Discount</a></div>
                            <div><a href="./aboutus.html">About Us</a></div>
                            <div><a href="#">Affiliate Program</a></div>
                            <div><a href="#">Brand Directory</a></div>
                            <div><a href="#">Coupon Codes</a></div>
                            <div><a href="./refer.html">Refer A Friend</a></div>
                            <div><a href="#">Student Discount</a></div>
                            <div><a href="#">Join Bellavita Experts</a></div>
                        </div>
                        <div>
                            <hr>
                            <label for="">Legal</label>
                            <div><a href="#">Cookie Information</a></div>
                            <div><a href="#">Privacy Policy</a></div>
                            <div><a href="#">Terms & Conditions</a></div>
                            <div><a href="#">Modern Slavery Statement</a></div>
                        </div>
                        <div>
                            <hr>
                            <label for="">How To Contact Us</label>
                            <div><a href="#">Message Us</a></div>
                            <div><a href="#">Free Beauty Consultations</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div id="frow2" class="fdf fdp">
                <div>
                    <h1>THG</h1>
                    <p>2022 © The Hut.com Ltd.</p>
                </div>
                <div>
                    <p>Pay securely with</p>
                    <div id="flogo">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRU5EwiLIR5zXa2DJwiDjBkBzV_-MgF4_Ca0inuEGojXgd8ylwX" alt="">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgq9Qv5nr4iAofJK2XXHUnQj2lairgNsBeNzFiaATT2_MDyXwH" alt="">
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJI9gwO-nF0r9DmsRekT0gAUedK0TS6BCo_I7DbrKcRcCJzdHY" alt="">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREOOmQwUw2IDL61UatUIFZIprcc_5bRFVsUtGcxzCCAagRU8H" alt="">
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSIgucSXvrizZZFz5U4JROBimmZ8QWouQRKmhF2g5Y2f6MwtOnJ" alt="">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR12RuKtQi8QqArAncl9OZdPzD3TJzvvuyNI-LPfVuTe_aDfKM-" alt="">
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `
}

let footer_append = document.getElementById('footer')
footer_append.innerHTML = footer();