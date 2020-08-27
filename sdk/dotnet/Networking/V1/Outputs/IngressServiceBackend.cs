// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Types.Outputs.Networking.V1
{

    [OutputType]
    public sealed class IngressServiceBackend
    {
        /// <summary>
        /// Name is the referenced service. The service must exist in the same namespace as the Ingress object.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Port of the referenced service. A port name or port number is required for a IngressServiceBackend.
        /// </summary>
        public readonly Pulumi.Kubernetes.Types.Outputs.Networking.V1.ServiceBackendPort Port;

        [OutputConstructor]
        private IngressServiceBackend(
            string name,

            Pulumi.Kubernetes.Types.Outputs.Networking.V1.ServiceBackendPort port)
        {
            Name = name;
            Port = port;
        }
    }
}