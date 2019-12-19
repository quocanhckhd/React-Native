import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../action/index';
import { CardSection } from './common';

class ListItem extends Component {

    renderDescription = () => {

        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection style={{ flex: 1 }}>
                    <Text>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { id, title } = this.props.library;

        return (

            <TouchableWithoutFeedback onPress={() => this.props.selectedLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,

	}
});

const mapStateToProps = (state, ownProps) => {
    const { selectedItem } = state;
    const expanded = state.selectedItem === ownProps.library.id;

    return { selectedItem, expanded };
};

const mapDispatchToProps = dispatch => ({
    selectedLibrary: libraryId => dispatch(actions.selectedLibrary(libraryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);