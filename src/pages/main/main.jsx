import parse from "html-react-parser";
import styles from "./main.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container } from "./../../common/components/ui/container";
import { Icon } from "./../../common/components/ui/icon";
import { iconMenuBurger } from "./../../common/components/ui/icons";

export const Main = ({ fakeList }) => (
  <div className={styles.wrapper}>
    <Icon path={iconMenuBurger} className={styles.mobileMenu} />
    <header className={styles.header}>
      <Container>
        <h1 className={styles.title}>Заголовок</h1>
      </Container>
    </header>
    <main className={styles.main}>
      <Container>
        <div className={styles.mainContent}>
          <Tabs className={styles.tabs} selectedTabClassName={styles.tabActive}>
            <div className={styles.aside}>
              <div className={styles.aside__content}>
                <TabList className={styles.tabList}>
                  {fakeList.map((item) => (
                    <Tab className={styles.tabItem}>{item.title}</Tab>
                  ))}
                </TabList>
              </div>
            </div>
            <div className={styles.question}>
              {fakeList.map((item, index) => {
                return (
                  <TabPanel key={index}>
                    {item.content.map((value, ind) => {
                      return (
                        <div key={ind} className={styles.question__block}>
                          <h3 className={styles.question__title}>
                            <span>Q: </span> {value.question}
                          </h3>
                          <div className={styles.question__ansver}>
                            <span>A:&nbsp;</span> {parse(value.ansver)}
                          </div>
                        </div>
                      );
                    })}
                  </TabPanel>
                );
              })}
            </div>
          </Tabs>
        </div>
      </Container>
    </main>
  </div>
);
