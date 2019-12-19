//import libraries to make a component
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

//Make a component
class LibraryList extends Component {

	renderItem(library){
		return <ListItem library={library} />;
	}

	render() {
		return (
			<FlatList
				data={this.props.libraries}
				renderItem={this.renderItem}
				keyExtractor={ (library) => library.id}
			/>
		);
	}
}

const mapStateToProps = ({libraries}) => ({
	libraries
});


//export component for others use 
export default connect(mapStateToProps)(LibraryList);