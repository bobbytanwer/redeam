
/** Generates a unique id */

export function uuid(usecase){
	function chr4(){
		return Math.random().toString(16).slice(-4);
	}
      return `${usecase}`+
      '_' + chr4() +
      '_' + chr4() +
      '-' + chr4() +
      '-' + chr4() +
      '-' + chr4() ;
}