// Copyright 2019-2020, University of Colorado Boulder

/**
 * The "AC Voltage" screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Property from '../../../axon/js/Property.js';
import CCKCConstants from '../../../circuit-construction-kit-common/js/CCKCConstants.js';
import screenIconAcSourceImage from '../../images/screen-icon-ac-source_png.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import Image from '../../../scenery/js/nodes/Image.js';
import circuitConstructionKitAcStrings from '../circuitConstructionKitAcStrings.js';
import circuitConstructionKitAc from '../circuitConstructionKitAc.js';
import ACVoltageModel from './model/ACVoltageModel.js';
import ACVoltageScreenView from './view/ACVoltageScreenView.js';

const acVoltageString = circuitConstructionKitAcStrings.screen[ 'ac-voltage' ];

class ACVoltageScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const homeScreenIcon = new Image( screenIconAcSourceImage );

    const options = {
      name: acVoltageString,
      backgroundColorProperty: new Property( CCKCConstants.BACKGROUND_COLOR ),
      homeScreenIcon: new ScreenIcon( homeScreenIcon, {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      tandem: tandem,
      maxDT: CCKCConstants.MAX_DT
    };

    super(
      () => new ACVoltageModel( tandem.createTandem( 'model' ) ),
      model => new ACVoltageScreenView( model, tandem.createTandem( 'view' ) ),
      options
    );
  }
}

circuitConstructionKitAc.register( 'ACVoltageScreen', ACVoltageScreen );
export default ACVoltageScreen;