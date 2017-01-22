import * as _ from 'lodash';

const questions_util = {
	
	/**
	 * filter by tags
	 */
	filterByTags(filterString, questions) {
		var tagRegExp = new RegExp(filterString, 'i');
		// question
		var questionsResult = questions && questions.filter((question) => {
			return question.tags && 
				   question.tags.filter && 
				   ( question.tags.filter((tag) => (tagRegExp.test(tag))) ).length > 0;
		}) || [];
		return questionsResult;
	},

	/**
	 * filter by title
	 */
	filterByTitle(filterString, questions) {
		var titleRegExp = new RegExp(filterString, 'i');
		// question
		var questionsResult = questions && questions.filter((question) => {
			return question.title && titleRegExp.test(question.title);
		}) || [];
		return questionsResult;
	},

	/**
	 * filter by title or tags
	 */
	filterByTitleOrTags(filterString, questions) {
		return _.unionBy(questions_util.filterByTags(filterString, questions),
						 questions_util.filterByTitle(filterString, questions),
						 'question_id');
	}	
}


const text_util =  {

	/**
	 * [shouldHighlight description]
	 */
	shouldHighlight(enableHighlight, searchString, targetString) {
		var regExp = new RegExp(searchString, 'i');
		if(!searchString || !targetString) {
			return false;
		}
		return regExp.test(targetString) && enableHighlight;
	}
}

const util = {
	questions: questions_util,
	text: text_util
}


export {util};