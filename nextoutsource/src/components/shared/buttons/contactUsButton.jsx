import Link from "next/link";

const ContactUsButton = () => {
  return (
    <Link
      href="/contactUs"
      className="navbar-btn bg-(--color-buttonBlue) px-8 py-2 text-white font-semibold border-2 rounded-2xl border-transparent hidden md:flex"
    >
      Contact Us
    </Link>
  );
};
export default ContactUsButton;
