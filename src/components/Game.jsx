import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions, showAnswers, finishGame } from '../actions';
import styled from 'styled-components';

import Answer from './Answer';
import GameButton from './GameButton';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: '' };
    this.onbuttonClick = this.onbuttonClick.bind(this);
  }

  componentDidMount() {
    const { fetchQuestions: fetchQuestionsAction } = this.props;
    fetchQuestionsAction();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.isShowAnswers) return false;
    return nextProps !== this.props;
  }

  prepareQuestion() {
    const {
      questions: { questions },
    } = this.props;
    const question = chooseRandom(questions, 1);

    return question?.[0];
  }

  renderList(answers, good_answers) {
    const min_x = 0;
    const max_x = 550;
    const min_y = 0;
    const max_y = 350;
    const filled_areas = [];
    const check_overlap = (area) => {
      for (let i = 0; i < filled_areas.length; i++) {
        const check_area = filled_areas[i];

        const bottom1 = area.y + area.height;
        const bottom2 = check_area.y + check_area.height;
        const top1 = area.y;
        const top2 = check_area.y;
        const left1 = area.x;
        const left2 = check_area.x;
        const right1 = area.x + area.width;
        const right2 = check_area.x + check_area.width;

        if (
          bottom1 < top2 ||
          top1 > bottom2 ||
          right1 < left2 ||
          left1 > right2
        ) {
          continue;
        }
        return true;
      }
      return false;
    };
    return answers.map((answer) => {
      let rand_x = 0;
      let rand_y = 0;
      let area;

      do {
        rand_x = Math.round(min_x + (max_x - min_x) * (Math.random() % 1));
        rand_y = Math.round(min_y + (max_y - min_y) * (Math.random() % 1));
        area = {
          x: rand_x,
          y: rand_y,
          width: 100,
          height: 41,
        };
      } while (check_overlap(area));

      filled_areas.push(area);
      return (
        <Answer
          style={{
            left: rand_x,
            top: rand_y,
          }}
          isGood={good_answers.includes(answer)}
          key={answer}
          text={answer}
        />
      );
    });
  }

  onbuttonClick() {
    const {
      showAnswers: showAnswersAction,
      finishGame: finishGameAction,
      isShowAnswers,
    } = this.props;

    if (isShowAnswers) finishGameAction();
    else showAnswersAction();
  }

  showQuestion() {
    const { all_words, good_words, question } = this.prepareQuestion();
    return (
      <div>
        <Container>
          <Title>{question}</Title>
          <Area>{this.renderList(all_words, good_words)}</Area>
          <GameButton onClick={this.onbuttonClick} />
        </Container>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.questions.questions == null ? null : this.showQuestion()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions,
  isShowAnswers: state.showAnswers,
});

const chooseRandom = (arr, num = 1) => {
  if (typeof arr !== 'undefined') {
    const res = [];
    for (let i = 0; i < num; ) {
      const random = Math.floor(Math.random() * arr.length);
      if (res.indexOf(arr[random]) !== -1) {
        continue;
      }

      res.push(arr[random]);
      i++;
    }
    return res;
  }
};

const Title = styled.h1`
  font-size: 2em;
  font-weight: 700;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  font-family: Lato, sans-serif;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Area = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 1em;
  border: 1px #000 solid;
  position: relative;
`;

export default connect(mapStateToProps, {
  fetchQuestions,
  showAnswers,
  finishGame,
})(Game);
