import React from "react";
import ArticleCard from "gatsby-theme-carbon/src/components/ArticleCard";
import PropTypes from "prop-types";

export default class HomepageArticles extends React.Component {
  static PropTypes = {
    href: PropTypes.string
  };
  render() {
    return (
      <div className="bx--col-md-4 bx--col-lg-4 bx--no-gutter--left">
        <ArticleCard
          title={this.props.title}
          author={this.props.author}
          readTime={this.props.readTime}
          href={this.props.href}
        >
          <img alt={this.props.alt} src={this.props.img} />
        </ArticleCard>
      </div>
    );
  }
}
