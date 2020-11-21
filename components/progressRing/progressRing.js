import { useEffect } from "react";
import { useCountUp } from "react-countup";
import { Text } from "@chakra-ui/react";
import styles from "./progressRing.module.css";

export default function ProgressRing({ trigger, count, content }) {
  const { countUp, start } = useCountUp({
    end: count,
    delay: 1000,
    duration: 5,
  });
  useEffect(() => {
    if (trigger) {
      start();
    }
  }, [trigger]);
  return (
    <div className={styles.cirlce}>
      <div className={styles.counter}>{countUp}</div>
      <Text fontSize="4xl">{content}</Text>
    </div>
  );
}
