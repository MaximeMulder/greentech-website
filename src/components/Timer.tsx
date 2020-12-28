import React, { ReactElement } from 'react';

interface TimerProps {
  time: number;
}

interface TimerState {
  time: number;
}

class Timer extends React.Component<TimerProps, TimerState> {
  interval: NodeJS.Timeout;

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      time: 0
    };

    this.update = this.update.bind(this);
  }

  componentDidMount(): void {
    this.interval = setInterval(this.update, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  render(): ReactElement {
    const date = new Date(this.state.time);
    return (
      <React.Fragment>
        {Math.ceil(date.getTime() / (24 * 60 * 60 * 1000))} JOURS {date.getUTCHours()} HEURES {date.getUTCMinutes()} MINUTES {date.getUTCSeconds()} SECONDES
      </React.Fragment>
    );
  }

  update(): void {
    this.setState({
      time: this.props.time * 1000 - Date.now()
    });
  }
}

export default Timer;
