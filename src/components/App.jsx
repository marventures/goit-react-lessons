import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../data/recipes.json';
import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  // initial state
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = ['good', 'neutral', 'bad'];

    return (
      <>
        <RecipeList recipes={recipes} />

        <Section title="Please leave feedback">
          {/* Create DOM to FeedbackOptions Component */}
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {/* Create DOM to Statistics Component */}
          <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        </Section>
      </>
    );
  }
}
