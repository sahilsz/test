type Room = {
  roomName: string,
  devices: string[],
  curtains: [],
  irblasters: {
    type: Array,

  },
  locks: {
    type: Array,

  },
  lockhubs: {
    type: Array,

  },
  wizs: {
    type: Array,

  },
  nvrs: {
    type: Array,

  },
  ipcameras: {
    type: Array,

  },
  motionsensors: {
    type: Array,

  },
  weatherSensors: {
    type: Array,

  },
  novas: {
    type: Array,

  },
  fans: {
    type: Array,

  },
  rgbs: {
    type: Array,

  },
  wavesensors: {
    type: Array,

  },
  ttlocks: {
    type: Array,

  },
  ttgateways: {
    type: Array,

  },
  stacks: {
    type: Array,

  },
  rgbwwws: {
    type: Array,

  },
  cameras: {
    type: Array,

  },
  honeywellThermostats: {
    type: Array,

  },
  energiSync:{
    type:Array,

  },
  smartMeter:{
    type:Array,
  },
},


type Device = {
  deviceId: String,
  ws: { type: String, default: 'aliste' },
  dp: { type: String, default: '12345' },
  wp: { type: String, default: '12345678' },
  ns: { type: Number, default: 5 },
  switches: [
    {
      switchId: Number,
      previousState: Number,
      switchName: String,
      switchState: { type: String, default: '0' },
      dimmable: Boolean,
      deviceType: Number,
      wattage: { type: Number, default: 230 },
      typeMetaData: { type: Object, default: {} },
      subscriptionId: {
        type: String,
      },
      autoTurnOff: { type: Number, default: 0 },
      notifyTimer: { type: Number, default: 0 },
      executionId: { type: String },
      notifyExecutionId: { type: String },
      autoTurnOffEnabled: { type: Boolean, default: false },
      smartNotificationEnabled: { type: Boolean, default: false },
      autoTurnOn: { type: Number, default: 0 },
      autoTurnOnExecutionId: { type: String },
      autoOffTimestamp: { type: Number, default: 0 },
      autoOffLastTriggered: { type: Number },
      autoTimers: {
        mode: { type: String, default: 'Always' },
        turnOffAfter: { type: Number, default: 0 },
        turnOnAfter: { type: Number, default: 0 },
        startTime: { type: String, default: '' },
        stopTime: { type: String, default: '' },
        executionId: { type: String },
        lastExecutionId: { type: String },
        lastExecuted: { type: Number },
        enabled: { type: Boolean },
      },
      forceExecuteEnabled: { type: Boolean, default: false },
      forceExecutionTimer: { type: Number, default: 0 },
      forceExecutionTimerId: { type: String, default: '' },
    },
  ],
  cws: string
  strength: number
  strength_time: string;
  firmware_version: number
  sent_ws: string
  sent_wp: string;
  credexc_time: string
  force_update: boolean
  ota_version: number;
  last_push_try: string;
  mac: string;
  buad_rate: number
  last_baud_rate_asked: string;
  css: string;
  ess: string;
  switchPinSync: {
    retryEnabled: boolean,
    retryTimeout: number;
    retries: number;
    retryTimerId: string;
  }
    type: Object,
    default: {
      retryEnabled: false,
      retryTimeout: 0,
      retries: 0,
      retryTimerId: '',
    },
  },
  lastSwitchPinSyncAttempt: string
  isMQTTDevice: boolean;

createdAt: string;
updatedAt: string;
}