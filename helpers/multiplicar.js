const fs = require( 'fs' );
const colors = require( 'colors' );

const crearArchivoPromise = ( base = 5 ) => {

    return new Promise( ( resolve, reject ) => {

        console.log('=====================');
        console.log('    Tabla del:', base );
        console.log('=====================');
    
        let salida = '';
    
        for( let i = 1; i <= 10; i++ ) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }
        
        console.log( salida );
        
        fs.writeFileSync( `tabla-${ base }.txt`, salida );
        
        resolve( `tabla-${ base }.txt` );

    } );

}

const crearArchivo = async ( base = 5, hasta = 10, listar = false ) => {

    try {
   
        let salida = '';
        let fichero = '';        
    
        for( let i = 1; i <= hasta; i++ ) {
            salida  += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
            fichero += `${ base } x ${ i } = ${ base * i }\n`;
        }

        if ( listar ) {

            console.log( '====================='.green );
            console.log( '    Tabla del:'.green, colors.blue( base ) );
            console.log( '====================='.green );


            console.log( salida );
            
        }
    
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, fichero );
    
        return `tabla-${ base }.txt`;
        
    } catch (err) {
        throw err;        
    }

    
}

module.exports = {
    crearArchivo
}


