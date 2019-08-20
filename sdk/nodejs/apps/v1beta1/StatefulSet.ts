// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import { getVersion } from "../../version";

    /**
     * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See
     * the release notes for more information. StatefulSet represents a set of pods with consistent
     * identities. Identities are defined as:
     *  - Network: A single stable DNS and hostname.
     *  - Storage: As many VolumeClaims as requested.
     * The StatefulSet guarantees that a given network identity will always map to the same storage
     * identity.
     * 
     * This resource waits until it is ready before registering success for
     * create/update and populating output properties from the current state of the resource.
     * The following conditions are used to determine whether the resource creation has
     * succeeded or failed:
     * 1. The value of 'spec.replicas' matches '.status.replicas', '.status.currentReplicas',
     *    and '.status.readyReplicas'.
     * 2. The value of '.status.updateRevision' matches '.status.currentRevision'.
     * 
     * If the StatefulSet has not reached a Ready state after 5 minutes, it will
     * time out and mark the resource update as Failed. You can override the default timeout value
     * by setting 'pulumi.com/timeoutSeconds' as a '.metadata.annotation' on the resource.
     * This approach will be deprecated in favor of customTimeouts. See
     * https://github.com/pulumi/pulumi-kubernetes/issues/672 for details.
     */
    export class StatefulSet extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"apps/v1beta1">;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"StatefulSet">;

      
      public readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;

      /**
       * Spec defines the desired identities of pods in this set.
       */
      public readonly spec: pulumi.Output<outputs.apps.v1beta1.StatefulSetSpec>;

      /**
       * Status is the current status of Pods in this StatefulSet. This data may be out of date by
       * some window of time.
       */
      public readonly status: pulumi.Output<outputs.apps.v1beta1.StatefulSetStatus>;

      /**
       * Get the state of an existing `StatefulSet` resource, as identified by `id`.
       * Typically this ID  is of the form <namespace>/<name>; if <namespace> is omitted, then (per
       * Kubernetes convention) the ID becomes default/<name>.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form
       *  <namespace>/<name> or <name>.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StatefulSet {
          return new StatefulSet(name, undefined, { ...opts, id: id });
      }

      /** @internal */
      private static readonly __pulumiType = "kubernetes:apps/v1beta1:StatefulSet";

      /**
       * Returns true if the given object is an instance of StatefulSet.  This is designed to work even
       * when multiple copies of the Pulumi SDK have been loaded into the same process.
       */
      public static isInstance(obj: any): obj is StatefulSet {
          if (obj === undefined || obj === null) {
              return false;
          }

          return obj["__pulumiType"] === StatefulSet.__pulumiType;
      }

      /**
       * Create a apps.v1beta1.StatefulSet resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputs.apps.v1beta1.StatefulSet, opts?: pulumi.CustomResourceOptions) {
          const props: pulumi.Inputs = {};
          props["apiVersion"] = "apps/v1beta1";
          props["kind"] = "StatefulSet";
          props["metadata"] = args && args.metadata || undefined;
          props["spec"] = args && args.spec || undefined;
          props["status"] = args && args.status || undefined;

          if (!opts) {
              opts = {};
          }

          if (!opts.version) {
              opts.version = getVersion();
          }
          super(StatefulSet.__pulumiType, name, props, opts);
      }
    }
