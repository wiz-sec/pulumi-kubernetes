// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Types.Inputs.Core.V1
{

    /// <summary>
    /// Affinity is a group of affinity scheduling rules.
    /// </summary>
    public class AffinityArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Describes node affinity scheduling rules for the pod.
        /// </summary>
        [Input("nodeAffinity")]
        public Input<Pulumi.Kubernetes.Types.Inputs.Core.V1.NodeAffinityArgs>? NodeAffinity { get; set; }

        /// <summary>
        /// Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
        /// </summary>
        [Input("podAffinity")]
        public Input<Pulumi.Kubernetes.Types.Inputs.Core.V1.PodAffinityArgs>? PodAffinity { get; set; }

        /// <summary>
        /// Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
        /// </summary>
        [Input("podAntiAffinity")]
        public Input<Pulumi.Kubernetes.Types.Inputs.Core.V1.PodAntiAffinityArgs>? PodAntiAffinity { get; set; }

        public AffinityArgs()
        {
        }
    }
}