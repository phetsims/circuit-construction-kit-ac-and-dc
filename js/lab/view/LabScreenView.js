// Copyright 2019-2020, University of Colorado Boulder

/**
 * The view for the Lab screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import CCKCConstants from '../../../../circuit-construction-kit-common/js/CCKCConstants.js';
import Resistor from '../../../../circuit-construction-kit-common/js/model/Resistor.js';
import CCKCScreenView from '../../../../circuit-construction-kit-common/js/view/CCKCScreenView.js';
import CircuitElementToolFactory from '../../../../circuit-construction-kit-common/js/view/CircuitElementToolFactory.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import circuitConstructionKitAc from '../../circuitConstructionKitAc.js';

class LabScreenView extends CCKCScreenView {

  /**
   * @param {LabModel} model
   * @param {Tandem} tandem
   */
  constructor( model, tandem ) {
    const circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty,
      point => this.circuitLayerNode.globalToLocalPoint( point ) );

    const wireToolNode = circuitElementToolFactory.createWireToolNode( CCKCConstants.NUMBER_OF_WIRES, tandem.createTandem( 'wireToolNode' ) );

    // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
    const circuitElementToolNodes = [

      // This page is duplicated in the Lab Screen View
      wireToolNode,
      circuitElementToolFactory.createRightBatteryToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
      circuitElementToolFactory.createACVoltageToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
      circuitElementToolFactory.createLightBulbToolNode( 10, tandem.createTandem( 'lightBulbToolNode' ) ),
      circuitElementToolFactory.createResistorToolNode( 10, Resistor.ResistorType.RESISTOR, tandem.createTandem( 'resistorToolNode' ) ),
      circuitElementToolFactory.createCapacitorToolNode( 10, tandem.createTandem( 'capacitorToolNode' ) ),
      circuitElementToolFactory.createInductorToolNode( 10, tandem.createTandem( 'inductorToolNode' ) ),
      circuitElementToolFactory.createSwitchToolNode( 5, tandem.createTandem( 'switchToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ), // Wire should appear at the top of each carousel page
      circuitElementToolFactory.createFuseToolNode( 10, tandem.createTandem( 'fuseToolNode' ) ),
      circuitElementToolFactory.createDollarBillToolNode( 1, tandem.createTandem( 'dollarBillToolNode' ) ),
      circuitElementToolFactory.createPaperClipToolNode( 1, tandem.createTandem( 'paperClipToolNode' ) ),
      circuitElementToolFactory.createCoinToolNode( 1, tandem.createTandem( 'coinToolNode' ) ),
      circuitElementToolFactory.createEraserToolNode( 1, tandem.createTandem( 'eraserToolNode' ) ),
      circuitElementToolFactory.createPencilToolNode( 1, tandem.createTandem( 'pencilToolNode' ) ),
      circuitElementToolFactory.createHandToolNode( 1, tandem.createTandem( 'handToolNode' ) ),

      new Node( { children: [ wireToolNode ] } ), // Wire should appear at the top of each carousel page
      circuitElementToolFactory.createDogToolNode( 1, tandem.createTandem( 'dogToolNode' ) )
    ];

    super( model, circuitElementToolNodes, tandem, {
      toolboxOrientation: 'vertical', // The toolbox should be vertical
      showResetAllButton: true, // The reset all button should be shown.
      showCharts: true,
      showStopwatchCheckbox: true,
      showSeriesAmmeters: true,
      circuitElementToolboxOptions: {
        itemsPerPage: 8,
        pageHeight: 400
      },
      showPhaseShiftControl: true,
      hasACandDCVoltageSources: true,
      showAdvancedControls: true
    } );
  }
}

circuitConstructionKitAc.register( 'LabScreenView', LabScreenView );
export default LabScreenView;