import React, { FC, HTMLProps } from "react";
import styles from "./settings.module.scss";
import { Outlet } from "react-router-dom";
import { NavLink } from "../../../components/ui/navLink/navLink";
import { Button } from "../../../components/ui/button/button";

export const Settings: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <NavLink to={"/profile"}>
          <Button variant="close">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              className="closeSmall"
            >
              <path d="M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"></path>
            </svg>
          </Button>
        </NavLink>
        <div className={styles.body}>
          <div className={styles.left}>
            <div className={styles.accountSettings}>
              <p className={styles.settingsTitle}>Email@gmail.com</p>
              <ul className={styles.settingsMenu}>
                <NavLink
                  to="/modal/account"
                  className={styles.settingsMenuItem}
                >
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.0778418,12.9406987 L18.5345074,14.5119103 C19.4269931,14.9175857 20,15.8074678 20,16.7878265 L20,17.5 C20,18.8807119 18.8807119,20 17.5,20 L6.5,20 C5.11928813,20 4,18.8807119 4,17.5 L4,16.7878265 C4,15.8074678 4.57300693,14.9175857 5.46549264,14.5119103 L8.92215823,12.9406987 C7.75209123,12.0255364 7,10.6005984 7,9 C7,6.23857625 9.23857625,4 12,4 C14.7614237,4 17,6.23857625 17,9 C17,10.6005984 16.2479088,12.0255364 15.0778418,12.9406987 L15.0778418,12.9406987 Z M9.96126583,13.5668358 L5.87929558,15.4222768 C5.34380416,15.665682 5,16.1996113 5,16.7878265 L5,17.5 C5,18.3284271 5.67157288,19 6.5,19 L17.5,19 C18.3284271,19 19,18.3284271 19,17.5 L19,16.7878265 C19,16.1996113 18.6561958,15.665682 18.1207044,15.4222768 L14.0387342,13.5668358 C13.4161054,13.8452135 12.7261289,14 12,14 C11.2738711,14 10.5838946,13.8452135 9.96126583,13.5668358 L9.96126583,13.5668358 Z M12,13 C14.209139,13 16,11.209139 16,9 C16,6.790861 14.209139,5 12,5 C9.790861,5 8,6.790861 8,9 C8,11.209139 9.790861,13 12,13 Z" />
                  </svg>
                  <p>My account</p>
                </NavLink>
                <NavLink
                  to="/modal/notification"
                  className={styles.settingsMenuItem}
                >
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M12.5361 7.54883C13.2744 7.54883 13.9033 7.09082 14.1631 6.44141H16.4258C16.7607 6.44141 17.0479 6.14746 17.0479 5.79199C17.0479 5.43652 16.7676 5.14258 16.4258 5.14258H14.1699C13.9102 4.49316 13.2744 4.03516 12.5361 4.03516C11.7979 4.03516 11.1621 4.49316 10.9023 5.14258H3.59473C3.23242 5.14258 2.95215 5.43652 2.95215 5.79199C2.95215 6.14746 3.23926 6.44141 3.59473 6.44141H10.9023C11.1621 7.09082 11.7979 7.54883 12.5361 7.54883ZM12.5361 6.62598C12.0713 6.62598 11.6953 6.25684 11.6953 5.79199C11.6953 5.31348 12.0713 4.95117 12.5361 4.95117C13.0078 4.95117 13.3701 5.31348 13.3701 5.79199C13.3701 6.25684 13.0078 6.62598 12.5361 6.62598ZM3.56738 9.40137C3.23242 9.40137 2.95215 9.68848 2.95215 10.0508C2.95215 10.3994 3.23926 10.6934 3.56738 10.6934H5.91211C6.16504 11.3428 6.80078 11.8076 7.5459 11.8076C8.27734 11.8076 8.91309 11.3428 9.17285 10.6934H16.4053C16.7607 10.6934 17.0479 10.4062 17.0479 10.0508C17.0479 9.68848 16.7676 9.40137 16.4053 9.40137H9.17285C8.91309 8.75195 8.27734 8.29395 7.5459 8.29395C6.80762 8.29395 6.17188 8.75195 5.91211 9.40137H3.56738ZM7.5459 10.8848C7.07422 10.8848 6.70508 10.5156 6.70508 10.0508C6.70508 9.57227 7.07422 9.20996 7.5459 9.20996C8.01758 9.20996 8.37988 9.57227 8.37988 10.0508C8.37988 10.5156 8.01758 10.8848 7.5459 10.8848ZM12.5361 16.0596C13.2744 16.0596 13.9102 15.6016 14.1699 14.9521H16.4258C16.7607 14.9521 17.0479 14.6582 17.0479 14.3027C17.0479 13.9404 16.7676 13.6533 16.4258 13.6533H14.1631C13.9102 13.0039 13.2744 12.5459 12.5361 12.5459C11.7979 12.5459 11.1621 13.0039 10.9023 13.6533H3.59473C3.23242 13.6533 2.95215 13.9473 2.95215 14.3027C2.95215 14.6582 3.23926 14.9521 3.59473 14.9521H10.9023C11.1621 15.6016 11.7979 16.0596 12.5361 16.0596ZM12.5361 15.1436C12.0713 15.1436 11.6953 14.7676 11.6953 14.3027C11.6953 13.8311 12.0713 13.4619 12.5361 13.4619C13.0078 13.4619 13.3701 13.8311 13.3701 14.3027C13.3701 14.7676 13.0078 15.1436 12.5361 15.1436Z"></path>
                  </svg>
                  <p>My notification & settings</p>
                </NavLink>
                <NavLink
                  to="/modal/connections"
                  className={styles.settingsMenuItem}
                >
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M16.492 3.922C15.695 3.125 14.57 3 13.234 3H7.148c-1.312 0-2.437.125-3.234.922C3.117 4.719 3 5.836 3 7.14v6.03c0 1.337.117 2.446.914 3.243.797.797 1.922.922 3.25.922h6.07c1.336 0 2.461-.125 3.258-.922.797-.797.914-1.906.914-3.242V7.164c0-1.336-.117-2.453-.914-3.242zm-.344 3.023v6.438c0 .812-.101 1.64-.578 2.117-.468.469-1.312.578-2.117.578h-6.5c-.805 0-1.648-.11-2.125-.578-.469-.477-.57-1.305-.57-2.117V6.969c0-.82.101-1.664.57-2.133.477-.477 1.328-.578 2.149-.578h6.476c.805 0 1.649.11 2.117.578.477.476.578 1.305.578 2.11zm-3.492 5.149c.344 0 .57-.266.57-.625V7.78c0-.46-.25-.64-.648-.64h-3.71c-.368 0-.602.226-.602.57s.242.57.617.57h1.422l1.156-.125-1.219 1.133-2.875 2.883a.62.62 0 00-.187.422c0 .351.226.578.57.578.188 0 .336-.07.445-.18l2.875-2.875 1.125-1.203-.117 1.219v1.351c0 .368.227.61.578.61z"></path>
                  </svg>
                  <p>My connections</p>
                </NavLink>
                <NavLink
                  to="/modal/language"
                  className={styles.settingsMenuItem}
                >
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M10 18.3281C14.3594 18.3281 17.9688 14.7109 17.9688 10.3594C17.9688 6 14.3516 2.39062 9.99219 2.39062C5.64062 2.39062 2.03125 6 2.03125 10.3594C2.03125 14.7109 5.64844 18.3281 10 18.3281ZM5.32812 5.29688C6.10938 4.57031 7.0625 4.02344 8.10938 3.71875C7.57031 4.26562 7.10938 5.03906 6.76562 5.99219C6.21094 5.8125 5.72656 5.57812 5.32812 5.29688ZM11.8984 3.72656C12.9375 4.03125 13.8828 4.57812 14.6719 5.30469C14.2734 5.58594 13.7891 5.8125 13.2344 5.99219C12.8906 5.04688 12.4297 4.27344 11.8984 3.72656ZM7.77344 6.25C8.21094 5.05469 8.82031 4.19531 9.49219 3.89844V6.42969C8.875 6.40625 8.30469 6.34375 7.77344 6.25ZM10.5156 3.89844C11.1797 4.19531 11.7891 5.05469 12.2266 6.25C11.6953 6.34375 11.125 6.40625 10.5156 6.42969V3.89844ZM3.10938 9.84375C3.21875 8.42188 3.77344 7.10156 4.63281 6.03906C5.11719 6.40625 5.74219 6.71094 6.46875 6.94531C6.24219 7.82031 6.10156 8.79688 6.0625 9.84375H3.10938ZM13.9375 9.84375C13.8984 8.79688 13.7578 7.82031 13.5312 6.94531C14.2578 6.71094 14.8828 6.40625 15.3594 6.04688C16.2266 7.10156 16.7812 8.42188 16.8906 9.84375H13.9375ZM10.5156 9.84375V7.45312C11.2188 7.42969 11.8906 7.34375 12.5234 7.21094C12.7266 8.01562 12.8516 8.90625 12.8906 9.84375H10.5156ZM7.10938 9.84375C7.14844 8.90625 7.28125 8.01562 7.47656 7.21094C8.10938 7.34375 8.78125 7.42969 9.49219 7.45312V9.84375H7.10938ZM3.10938 10.8672H6.0625C6.10156 11.9375 6.24219 12.9219 6.46875 13.8047C5.75 14.0391 5.13281 14.3438 4.65625 14.7031C3.78125 13.6328 3.21875 12.3047 3.10938 10.8672ZM7.10938 10.8672H9.49219V13.3047C8.78906 13.3281 8.11719 13.4141 7.49219 13.5391C7.28125 12.7266 7.14062 11.8203 7.10938 10.8672ZM10.5156 13.3047V10.8672H12.8906C12.8594 11.8203 12.7188 12.7266 12.5078 13.5391C11.8906 13.4141 11.2109 13.3281 10.5156 13.3047ZM13.5312 13.8047C13.7578 12.9219 13.8984 11.9375 13.9375 10.8672H16.8906C16.7812 12.3047 16.2188 13.6328 15.3438 14.7031C14.8672 14.3438 14.25 14.0391 13.5312 13.8047ZM10.5156 14.3281C11.1172 14.3516 11.6875 14.4062 12.2109 14.5078C11.7734 15.6719 11.1719 16.5312 10.5156 16.8281V14.3281ZM7.78906 14.5078C8.3125 14.4062 8.88281 14.3516 9.49219 14.3281V16.8281C8.82812 16.5312 8.22656 15.6719 7.78906 14.5078ZM13.2266 14.7578C13.7734 14.9375 14.25 15.1641 14.6484 15.4375C13.8672 16.1484 12.9375 16.6875 11.9062 16.9922C12.4297 16.4531 12.8828 15.6875 13.2266 14.7578ZM5.35156 15.4375C5.75 15.1641 6.22656 14.9375 6.77344 14.7578C7.11719 15.6875 7.57031 16.4531 8.10156 16.9922C7.07031 16.6875 6.13281 16.1484 5.35156 15.4375Z"></path>
                  </svg>
                  <p>Language & region</p>
                </NavLink>
                <NavLink to="/modal/earn" className={styles.settingsMenuItem}>
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M5.89062 18.1094H14.1016C15.5703 18.1094 16.3828 17.3359 16.3828 15.8594V11.0625H16.4375C17.125 10.9141 17.5078 10.3594 17.5078 9.5625V7.50781C17.5078 6.55469 16.9766 5.95312 16.0234 5.95312H14.4453C14.8594 5.53906 15.1016 4.97656 15.1016 4.32812C15.1016 2.8125 13.9062 1.73438 12.3906 1.73438C11.2969 1.73438 10.3906 2.33594 9.99219 3.38281C9.59375 2.33594 8.69531 1.73438 7.59375 1.73438C6.08594 1.73438 4.88281 2.8125 4.88281 4.32812C4.88281 4.97656 5.125 5.53906 5.54688 5.95312H3.96875C3.05469 5.95312 2.48438 6.55469 2.48438 7.50781V9.5625C2.48438 10.3594 2.85938 10.9141 3.54688 11.0625H3.60156V15.8594C3.60156 17.3359 4.41406 18.1094 5.89062 18.1094ZM9.35156 5.95312H8.13281C6.90625 5.95312 6.1875 5.25781 6.1875 4.39844C6.1875 3.53906 6.8125 3.03906 7.67188 3.03906C8.60156 3.03906 9.35156 3.74219 9.35156 4.89844V5.95312ZM10.6328 5.95312V4.89844C10.6328 3.74219 11.3828 3.03906 12.3125 3.03906C13.1719 3.03906 13.7969 3.53906 13.7969 4.39844C13.7969 5.25781 13.0859 5.95312 11.8516 5.95312H10.6328ZM9.29688 9.9375H4.28906C3.89844 9.9375 3.74219 9.77344 3.74219 9.38281V7.67969C3.74219 7.28906 3.89844 7.13281 4.28906 7.13281H9.29688V9.9375ZM10.6875 9.9375V7.13281H15.7109C16.1016 7.13281 16.25 7.28906 16.25 7.67969V9.38281C16.25 9.77344 16.1016 9.9375 15.7109 9.9375H10.6875ZM9.29688 16.9375H5.875C5.22656 16.9375 4.85938 16.5703 4.85938 15.9219V11.1172H9.29688V16.9375ZM10.6875 16.9375V11.1172H15.125V15.9219C15.125 16.5703 14.7578 16.9375 14.1094 16.9375H10.6875Z"></path>
                  </svg>
                  <p>Earn credit</p>
                </NavLink>
              </ul>
            </div>
            <div className={styles.accountWorkspace}>
              <p className={styles.settingsTitle}>Workspace</p>
              <ul className={styles.settingsMenu}>
                <NavLink
                  to="/modal/settings"
                  className={styles.settingsMenuItem}
                >
                  <svg width="20px" height="20px" viewBox="0 0 16 16">
                    <path d="M7.30957 15.4814H8.69043C9.25781 15.4814 9.70215 15.1328 9.83203 14.5928L10.1123 13.3828L10.29 13.3145L11.3428 13.9639C11.8213 14.2646 12.3818 14.1895 12.7783 13.7861L13.7354 12.8291C14.1455 12.4258 14.2139 11.8652 13.9131 11.3936L13.2637 10.3477L13.3252 10.1768L14.5352 9.89648C15.0684 9.75977 15.4238 9.31543 15.4238 8.75488V7.4082C15.4238 6.84766 15.0752 6.40332 14.5352 6.2666L13.3389 5.97949L13.2705 5.80176L13.9199 4.75586C14.2207 4.28418 14.1455 3.73047 13.7422 3.31348L12.7852 2.35645C12.3887 1.95996 11.8281 1.88477 11.3564 2.17871L10.3037 2.82129L10.1123 2.74609L9.83203 1.53613C9.70215 0.996094 9.25781 0.647461 8.69043 0.647461H7.30957C6.73535 0.647461 6.29785 0.996094 6.16797 1.53613L5.8877 2.74609L5.69629 2.82129L4.64355 2.17871C4.16504 1.88477 3.60449 1.95996 3.20801 2.35645L2.25098 3.31348C1.84766 3.73047 1.77246 4.28418 2.07324 4.75586L2.72949 5.80176L2.6543 5.97949L1.46484 6.2666C0.917969 6.40332 0.576172 6.84766 0.576172 7.4082V8.75488C0.576172 9.31543 0.924805 9.75977 1.46484 9.89648L2.66797 10.1768L2.73633 10.3477L2.08008 11.3936C1.7793 11.8652 1.85449 12.4258 2.25781 12.8291L3.21484 13.7861C3.61816 14.1895 4.17871 14.2646 4.65039 13.9639L5.70312 13.3145L5.8877 13.3828L6.16797 14.5928C6.29785 15.1328 6.73535 15.4814 7.30957 15.4814ZM7.47363 14.2441C7.35742 14.2441 7.30273 14.1895 7.28223 14.0869L6.87891 12.4053C6.44141 12.3027 6.03125 12.1318 5.69629 11.9199L4.21973 12.8291C4.1377 12.8838 4.05566 12.877 3.9668 12.7949L3.24219 12.0703C3.16699 11.9951 3.16016 11.9131 3.22168 11.8242L4.13086 10.3477C3.93945 10.0264 3.75488 9.61621 3.65234 9.18555L1.96387 8.78223C1.86133 8.76172 1.81348 8.70703 1.81348 8.59082V7.56543C1.81348 7.44238 1.86133 7.39453 1.96387 7.36719L3.65234 6.9707C3.75488 6.5127 3.95312 6.08887 4.11719 5.79492L3.21484 4.3252C3.15332 4.22949 3.15332 4.14746 3.23535 4.06543L3.95996 3.34766C4.04883 3.27246 4.11719 3.25879 4.21973 3.31348L5.68945 4.20898C5.99707 4.02441 6.44824 3.83301 6.87891 3.72363L7.28223 2.04199C7.30273 1.93945 7.35742 1.88477 7.47363 1.88477H8.52637C8.64258 1.88477 8.69727 1.93262 8.71094 2.04199L9.12109 3.7373C9.56543 3.83984 9.96875 4.02441 10.3037 4.21582L11.7734 3.32031C11.876 3.26562 11.9443 3.27246 12.0264 3.35449L12.7578 4.07227C12.8398 4.14746 12.8398 4.22949 12.7783 4.3252L11.876 5.79492C12.04 6.08887 12.2451 6.5127 12.3477 6.9707L14.0293 7.36719C14.1387 7.39453 14.1865 7.44238 14.1865 7.56543V8.59082C14.1865 8.70703 14.1318 8.76172 14.0293 8.78223L12.3408 9.18555C12.2383 9.61621 12.0537 10.0264 11.8691 10.3477L12.7715 11.8242C12.8262 11.9131 12.8262 11.9951 12.751 12.0635L12.0264 12.7949C11.9375 12.877 11.8555 12.8838 11.7734 12.8291L10.2969 11.9199C9.96191 12.1318 9.57227 12.3027 9.12109 12.4053L8.71094 14.0869C8.69727 14.1963 8.64258 14.2441 8.52637 14.2441H7.47363ZM8 10.6621C9.42188 10.6621 10.5908 9.49316 10.5908 8.06445C10.5908 6.64941 9.42188 5.48047 8 5.48047C6.57812 5.48047 5.40234 6.64941 5.40234 8.06445C5.40234 9.49316 6.57129 10.6621 8 10.6621ZM8 9.49316C7.2207 9.49316 6.57812 8.85059 6.57812 8.06445C6.57812 7.29199 7.2207 6.65625 8 6.65625C8.76562 6.65625 9.40137 7.29199 9.40137 8.06445C9.40137 8.84375 8.76562 9.49316 8 9.49316Z"></path>
                  </svg>
                  <p>Settings</p>
                </NavLink>
                <NavLink
                  to="/modal/members"
                  className={styles.settingsMenuItem}
                >
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M13.726 9.989c1.725 0 3.123-1.585 3.123-3.536 0-1.92-1.39-3.453-3.123-3.453-1.712 0-3.124 1.556-3.124 3.468.008 1.943 1.405 3.52 3.123 3.52zm-8.264.171c1.504 0 2.716-1.392 2.716-3.111 0-1.675-1.212-3.03-2.716-3.03-1.49 0-2.724 1.378-2.717 3.037 0 1.72 1.22 3.104 2.717 3.104zm8.264-1.474c-.985 0-1.819-.967-1.819-2.225 0-1.213.827-2.159 1.819-2.159.998 0 1.818.93 1.818 2.151 0 1.25-.827 2.233-1.819 2.233zm-8.264.186c-.806 0-1.49-.803-1.49-1.816 0-.967.677-1.756 1.49-1.756.827 0 1.497.774 1.497 1.749 0 1.02-.684 1.823-1.497 1.823zM1.54 17h5.54c-.392-.238-.656-.782-.606-1.273H1.476c-.136 0-.193-.067-.193-.193 0-1.705 1.911-3.327 4.172-3.327.798 0 1.597.208 2.21.566.242-.365.542-.678.934-.946-.906-.58-2.032-.893-3.144-.893C2.438 10.934 0 13.182 0 15.653 0 16.546.513 17 1.54 17zm7.743 0h8.885C19.4 17 20 16.59 20 15.712c0-2.046-2.453-4.77-6.274-4.77-3.822 0-6.275 2.724-6.275 4.77 0 .879.599 1.288 1.832 1.288zm-.228-1.303c-.164 0-.228-.059-.228-.193 0-1.139 1.761-3.26 4.899-3.26 3.137 0 4.898 2.121 4.898 3.26 0 .134-.064.194-.235.194H9.055z"></path>
                  </svg>
                  <p>Members</p>
                </NavLink>
                <NavLink
                  to="/modal/upgrade"
                  className={styles.settingsMenuItem}
                >
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M9.969 17.938c4.36 0 7.969-3.618 7.969-7.97C17.938 5.61 14.32 2 9.96 2 5.609 2 2 5.61 2 9.969c0 4.351 3.617 7.969 7.969 7.969zm0-1.329a6.609 6.609 0 01-6.633-6.64 6.602 6.602 0 016.625-6.64 6.627 6.627 0 016.648 6.64 6.61 6.61 0 01-6.64 6.64zm0-2.734a.562.562 0 00.586-.586V9.383l-.063-1.656.797.945.922.937a.52.52 0 00.414.172c.32 0 .57-.242.57-.562a.566.566 0 00-.164-.406L10.43 6.219c-.149-.149-.29-.227-.461-.227-.164 0-.297.07-.453.227l-2.61 2.593a.555.555 0 00-.148.407c0 .32.242.562.562.562a.572.572 0 00.414-.172l.93-.937.781-.938-.062 1.649v3.906c0 .344.25.586.586.586z"></path>
                  </svg>
                  <p>Upgrade</p>
                </NavLink>
                <NavLink
                  to="/modal/billing"
                  className={styles.settingsMenuItem}
                >
                  <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3.24219 17.5625H16.7578C18.3984 17.5625 19.2109 16.75 19.2109 15.1406V5.60156C19.2109 3.99219 18.3984 3.17969 16.7578 3.17969H3.24219C1.60938 3.17969 0.789062 3.98438 0.789062 5.60156V15.1406C0.789062 16.7578 1.60938 17.5625 3.24219 17.5625ZM2.04688 5.66406C2.04688 4.85156 2.47656 4.4375 3.25781 4.4375H16.7422C17.5156 4.4375 17.9531 4.85156 17.9531 5.66406V6.84375H2.04688V5.66406ZM3.25781 16.3047C2.47656 16.3047 2.04688 15.8906 2.04688 15.0781V8.61719H17.9531V15.0781C17.9531 15.8906 17.5156 16.3047 16.7422 16.3047H3.25781ZM4.5 14.625H6.41406C6.86719 14.625 7.17969 14.3125 7.17969 13.875V12.4297C7.17969 11.9844 6.86719 11.6797 6.41406 11.6797H4.5C4.03906 11.6797 3.72656 11.9844 3.72656 12.4297V13.875C3.72656 14.3125 4.03906 14.625 4.5 14.625Z"></path>
                  </svg>
                  <p>Billing</p>
                </NavLink>
                <NavLink
                  to="/modal/security"
                  className={styles.settingsMenuItem}
                >
                  <svg width="20px" height="20px" viewBox="0 0 11 20">
                    <path d="M4.92129 19.3231C5.26719 19.627 5.74092 19.6649 6.07178 19.3383L8.38779 16.9913C8.71865 16.6571 8.70361 16.1558 8.38027 15.8292L7.2749 14.7127L8.92168 13.0569C9.2375 12.7379 9.22998 12.229 8.90664 11.8948L7.41026 10.3757C9.44805 9.35026 10.5985 7.64127 10.5985 5.62847C10.5985 2.78016 8.32012 0.486328 5.49277 0.486328C2.66543 0.486328 0.394531 2.77257 0.394531 5.62847C0.394531 7.67166 1.54502 9.50217 3.37979 10.3301V17.4622C3.37979 17.7357 3.4625 18.0471 3.69561 18.2446L4.92129 19.3231ZM5.49277 17.9863L4.68066 17.166V9.34266C2.95869 8.9629 1.73301 7.4438 1.73301 5.62847C1.73301 3.53972 3.40986 1.84592 5.49277 1.84592C7.57569 1.84592 9.24502 3.53212 9.24502 5.62847C9.24502 7.42101 8.01181 8.96289 6.13194 9.38824V11.0289L7.57569 12.4872L6.03418 14.0214V15.3887L7.04931 16.3989L5.49277 17.9863ZM5.49277 5.67405C6.23721 5.67405 6.83877 5.06641 6.83877 4.32205C6.83877 3.5777 6.23721 2.97005 5.49277 2.97005C4.74834 2.97005 4.1543 3.5701 4.1543 4.32205C4.1543 5.06641 4.75586 5.67405 5.49277 5.67405Z"></path>
                  </svg>
                  <p>Security</p>
                </NavLink>
              </ul>
            </div>
          </div>
          <div className={styles.right}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
