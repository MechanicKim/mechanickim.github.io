import type { ReactNode } from "react";
import CodeIcon from "../Icon/CodeIcon";
import ExerciseIcon from "../Icon/ExerciseIcon";
import styles from "./Main.module.css";
import OpenInNewIcon from "../Icon/OpenInNew";

import mainImage from "../../assets/main.jpg";

interface LabelProps {
  color: string;
  children: ReactNode;
}

function Label({ color, children }: LabelProps) {
  return <span className={`${styles.label} ${color}`}>{children}</span>;
}

const feDevToDos = [
  { week: 1, done: true },
  { week: 2, done: true },
  { week: 3, done: true },
  { week: 4, done: true },
  { week: 5, done: true },
  { week: 6, done: false },
  { week: 7, done: false },
  { week: 8, done: false },
  { week: 9, done: false },
];

const pullUpToDos = [
  { count: 10, done: true },
  { count: 13, done: false },
  { count: 15, done: false },
  { count: 17, done: false },
  { count: 20, done: false },
];

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <img src={mainImage} />
        <div>
          <h1>안녕하세요. 김민규입니다.</h1>
          <p>
            좋은 습관을 만들고 꾸준히 실천하기 위해 챌린지를 만들어 도전,
            기록하고 있습니다.
          </p>
        </div>
      </div>
      <section>
        <article>
          <h1>
            <CodeIcon /> FE 챌린지
          </h1>
          <h3>
            프론트엔드 실무 역량을 키우기 위한 과제 풀이{" "}
            <a
              href="https://github.com/MechanicKim/fe-challenge/blob/main/README.md"
              target="_blank"
            >
              <OpenInNewIcon width={20} height={20} />
            </a>
          </h3>
          <div>
            <Label color={styles.common}>열심히 진행 중 🧑🏻‍💻</Label>
          </div>
          <div className={styles.progress}>
            {feDevToDos.map(({ week, done }) => (
              <Label key={week} color={done ? styles.done : styles.todo}>
                {week}주차
              </Label>
            ))}
          </div>
        </article>
        <article>
          <h1>
            <ExerciseIcon /> 풀업 챌린지
          </h1>
          <h3>내 몸의 한계를 띄어넘는 가장 정직한 도전!</h3>
          <div>
            <Label color={styles.common}>10개까지 달성! 💪🏻</Label>
          </div>
          <div className={styles.progress}>
            ...
            {pullUpToDos.map(({ count, done }) => (
              <Label key={count} color={done ? styles.done : styles.todo}>
                {count}개
              </Label>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
