export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  items.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProps }
    }
    return u
  })
}

obj = {
  api: {
    deviceTree: {
      CardReader: [
        {
          driver: 'MicroelectronicaNFC',
          modName: 'CardReader',
          modVersion: 1,
          port:
            '/dev/serial/by-id/usb-Silicon_Labs_CP2104_USB_to_UART_Bridge_Controller_014DF6DF-if00-port0',
          status: 0,
          statusDescr: 'Idling',
        },
      ],
      CashAcceptor: [
        {
          driver: 'ID003',
          modName: 'Money',
          modVersion: 3,
          port: '/dev/ttyS0',
          status: 0,
          type: 'JCM',
          version: 'S(UKR)-03-MW SM-BDP04V029-21 28FEB17     ',
        },
      ],
      CashDispenser: [{ modName: 'Dispenser', modVersion: 2, products: [] }],
      POS: [
        {
          driver: 'Ingenico',
          modName: 'POS',
          modVersion: 1,
          options: [{}, { merchantIdx: '1' }],
          port: '/dev/serial/by-id/usb-INGENICO_Ingenico_iUP250-if00',
          status: 0,
        },
      ],
      Printer: [
        {
          driver: 'SeaRRO',
          modName: 'Printer',
          modVersion: 1,
          papperState: -1,
          port:
            '/dev/serial/by-id/usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0',
          status: 0,
        },
      ],
      ProductDispenser: [
        {
          driver: 'ICT-CVD',
          modName: 'Dispenser',
          modVersion: 2,
          port: '/dev/ttyS5',
          products: [{ class: 'Fare card', count: 75, name: 'Kharkov fare card' }],
          status: 0,
        },
      ],
    },
    deviceTreeTypeMap: {
      CashDispenser: [{ products: [] }],
      POS: [{ options: [{}, { merchantIdx: 'number' }, {}] }],
      ProductDispenser: [{ products: [{ count: 'number' }] }],
    },
  },
}
