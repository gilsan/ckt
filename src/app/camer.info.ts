
export interface ICamera {
  cameraID: string;
  cameraModel: string;
  cameraserialNum: string;
  cameraInstallDate: string;
  cameraUseyn: string;
  siteID: string;
  blockID: string;
  zoneID: string;
  localIP: string;
  localPortIr: string;
  locallPortRtsp: string;
  netmask: string;
  gateway: string;
  hostPortRecon: string;
  hostIpCloud: string;
  hostPortCloud: string;
  hostIpMqtt: string;
  hostportMqtt: string;
  mqttUserId: string;
  mqttPassword: string;
  mqttPubTopic: string;
  flagOpMode: string;
  flagFaceTemperature;
  flagFaceMask: string;
  flagRecongnition: string;
  flagLiveness: string;
  threshold: string;
  iou_threshold: string;
  marginX: string;
  marginY: string;
  scaleX: string;
  scaleY: string;
  faceMinSize: string;
}
