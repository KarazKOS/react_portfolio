import React from "react";

function footer() {
    return (
        <div>
          <div class="footer col-lg-12 border-high text-left pl-5 py-4 nav-main">
      <p class="text-sm">©2020 YULIN KARAISCOS</p>
      <a class="text-sm" href="mailto:ykaraiscos@yahoo.com"
        >ykaraiscos@yahoo.com</a
      >
      <br />
      <a
        class="text-sm border-dark border-right"
        href="https://www.linkedin.com/in/yulinkaraiscos/"
        >LinkedIN |</a
      >
      <a
        class="text-sm border-dark border-right"
        href="https://github.com/KarazKOS"
        >GitHub |</a
      >
      <a
        class="text-sm border-dark border-right"
        href="https://www.behance.net/yulinkaraiscos"
        >Behance |</a
      >
      <a class="text-sm" href="https://www.instagram.com/reaktioncreative/"
        >Instagram |</a
      >
      <a class="text-sm border-dark border-right" href="./Assets/docs/Yulin Karaiscos Resume.pdf"
      > Resume</a
    >
    </div>
           {/* <Nav defaultActiveKey="/" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="https://github.com/KarazKOS">gitHub</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="ykaraiscos@yahoo.com">E-Mail</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link eventKey="https://www.linkedin.com/in/yulinkaraiscos/">LinkedIn</Nav.Link>
  </Nav.Item>
</Nav> */}
        </div>
    )
}

export default footer;