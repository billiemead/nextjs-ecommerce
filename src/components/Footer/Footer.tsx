import Link from "next/link";
import footerClassNames from "./footerClassNames";

const Footer = () => {
  const {
    container,
    footer,
    section,
    section1,
    section1Content,
    section1Heading,
    section2,
    sectionLink,
    section2Content,
    section2Heading,
    section2ul,
    section3,
    section3Content,
    section3Heading,
  } = footerClassNames;

  return (
    <footer className={footer}>
      <div className={container}>
        <div className={section}>
          <div className={section1}>
            <h2 className={section1Heading}>Logo</h2>
            <p className={section1Content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={section2}>
            <h2 className={section2Heading}>About Us</h2>
            <ul>
              <li>
                <Link href="#" className={sectionLink}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className={sectionLink}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className={section3}>
            <h2 className={section3Heading}>Contact Us</h2>
            <p className={section3Content}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
