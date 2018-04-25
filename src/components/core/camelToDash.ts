export const camel2Dash = ( str: string ) => {
	str = str.trim();

	if ( str === '' ) {
		return '';
	}

	str = str[ 0 ].toLowerCase() + str.substr( 1 );

	return str.replace( /([A-Z])/g, ( $1 ) =>  '-' + $1.toLowerCase());
};
