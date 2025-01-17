import { CommonStrings } from '@inspectreplyai/utils';
import React, { useState, useEffect, useRef } from 'react';
import { Text } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import { TimerPropsType } from './@types';
import { styles } from './styles';

function TimerComponent(props: TimerPropsType) {
  const { timer, onPressResend } = props;
  const [counter, setCounter] = useState(timer);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current !== null) {
        BackgroundTimer.clearInterval(timerRef.current);
      }
    };
  }, [counter]);

  const startTimer = () => {
    if (timerRef.current !== null) {
      BackgroundTimer.clearInterval(timerRef.current);
    }
    timerRef.current = BackgroundTimer.setInterval(() => {
      setCounter((time) => {
        if (time <= 1) {
          BackgroundTimer.clearInterval(timerRef.current!);
          return 0;
        } else {
          return time - 1;
        }
      });
    }, 1000);
  };

  const onPressResendCode = () => {
    if (timerRef.current !== null) {
      BackgroundTimer.clearInterval(timerRef.current);
    }
    setCounter(timer);
    onPressResend();
  };

  return (
    <>
      {counter !== 0 ? (
        <Text allowFontScaling={false} style={styles.timerStyle}>{`${'00'}:${
          counter > 9 ? counter : `0${counter}`
        }`}</Text>
      ) : (
        <Text style={styles.resendtext} onPress={onPressResendCode}>
          {CommonStrings.resendCode}
        </Text>
      )}
    </>
  );
}

export default TimerComponent;
