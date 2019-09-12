// Copyright 2019, University of Colorado Boulder

/**
 * The view for the RLC screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( require => {
  'use strict';

  // modules
  const BooleanProperty = require( 'AXON/BooleanProperty' );
  const CCKCScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKCScreenView' );
  const circuitConstructionKitAcAndDc = require( 'CIRCUIT_CONSTRUCTION_KIT_AC_AND_DC/circuitConstructionKitAcAndDc' );
  const CircuitElementToolFactory = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CircuitElementToolFactory' );
  const NumberProperty = require( 'AXON/NumberProperty' );
  const TimerNode = require( 'SCENERY_PHET/TimerNode' );

  class RLCScreenView extends CCKCScreenView {

    /**
     * @param {RLCModel} model
     * @param {Tandem} tandem
     */
    constructor( model, tandem ) {
      const circuitElementToolFactory = new CircuitElementToolFactory( model.circuit, model.showLabelsProperty, model.viewTypeProperty,
        point => this.circuitLayerNode.globalToLocalPoint( point ) );

      // Tool nodes that appear on every screen. Pagination for the carousel, each page should begin with wire node
      const circuitElementToolNodes = [

        // This page is duplicated in the Lab Screen View
        circuitElementToolFactory.createWireToolNode( 25, tandem.createTandem( 'wireToolNode' ) ),
        circuitElementToolFactory.createRightBatteryToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
        circuitElementToolFactory.createACVoltageToolNode( 10, tandem.createTandem( 'rightBatteryToolNode' ) ),
        circuitElementToolFactory.createLightBulbToolNode( 10, tandem.createTandem( 'lightBulbToolNode' ) ),
        circuitElementToolFactory.createResistorToolNode( 10, tandem.createTandem( 'resistorToolNode' ) ),
        circuitElementToolFactory.createCapacitorToolNode( 10, tandem.createTandem( 'capacitorToolNode' ) ),
        circuitElementToolFactory.createInductorToolNode( 10, tandem.createTandem( 'inductorToolNode' ) ),
        circuitElementToolFactory.createSwitchToolNode( 5, tandem.createTandem( 'switchToolNode' ) )
      ];

      super( model, circuitElementToolNodes, tandem, {
        toolboxOrientation: 'vertical', // The toolbox should be vertical
        showResetAllButton: true, // The reset all button should be shown.
        showResistivityControl: false,
        showBatteryResistanceControl: false,
        showCharts: true,
        itemsPerPage: circuitElementToolNodes.length,
        pageHeight: 400,
        hideDisabledButtons: true
      } );

      // @public - the TimerNode
      // TODO: consider generalizing Stopwatch and StopwatchNode from gas-properties
      this.timerNode = new TimerNode( new NumberProperty( 0 ), new BooleanProperty( false ), {} );
      this.addChild( this.timerNode );

      // Show the TimerNode when the checkbox is checked
      model.showStopwatchProperty.link( showStopwatch => {
        this.timerNode.visible = showStopwatch;
      } );
    }
  }

  return circuitConstructionKitAcAndDc.register( 'RLCScreenView', RLCScreenView );
} );