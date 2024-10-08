import {
  GetSchemaCreationStatusCommand,
  type GetSchemaCreationStatusCommandInput,
  type GetSchemaCreationStatusCommandOutput,
  type ListFunctionsCommandInput,
  type StartSchemaCreationCommandInput,
  type StartSchemaCreationCommandOutput,
  type UpdateApiKeyCommandInput,
  type UpdateApiKeyCommandOutput,
  type UpdateFunctionCommandInput,
  type UpdateFunctionCommandOutput,
  type UpdateResolverCommandInput,
  type UpdateResolverCommandOutput,
  StartSchemaCreationCommand,
  UpdateApiKeyCommand,
  UpdateFunctionCommand,
  UpdateResolverCommand,
  AppSyncClient,
  paginateListFunctions,
  FunctionConfiguration,
} from '@aws-sdk/client-appsync';
import {
  CloudFormationClient,
  CreateChangeSetCommand,
  CreateStackCommand,
  type CreateChangeSetCommandInput,
  type CreateChangeSetCommandOutput,
  type CreateStackCommandInput,
  type CreateStackCommandOutput,
  type DeleteChangeSetCommandInput,
  type DeleteChangeSetCommandOutput,
  type DeleteStackCommandInput,
  type DeleteStackCommandOutput,
  type DescribeChangeSetCommandInput,
  type DescribeChangeSetCommandOutput,
  type DescribeStackEventsCommandInput,
  type DescribeStacksCommandInput,
  type DescribeStacksCommandOutput,
  type ExecuteChangeSetCommandInput,
  type ExecuteChangeSetCommandOutput,
  type GetTemplateCommandInput,
  type GetTemplateCommandOutput,
  type ListExportsCommandInput,
  type ListExportsCommandOutput,
  type ListStackResourcesCommandInput,
  type UpdateStackCommandInput,
  type UpdateStackCommandOutput,
  type UpdateTerminationProtectionCommandInput,
  type UpdateTerminationProtectionCommandOutput,
  DeleteChangeSetCommand,
  DeleteStackCommand,
  DescribeChangeSetCommand,
  DescribeStackResourcesCommand,
  DescribeStacksCommand,
  ExecuteChangeSetCommand,
  GetTemplateCommand,
  ListExportsCommand,
  UpdateStackCommand,
  UpdateTerminationProtectionCommand,
  type GetTemplateSummaryCommandInput,
  type GetTemplateSummaryCommandOutput,
  GetTemplateSummaryCommand,
  type ListResourceScanResourcesCommandInput,
  type ListResourceScanResourcesCommandOutput,
  ListResourceScanResourcesCommand,
  type DescribeResourceScanCommandInput,
  type DescribeResourceScanCommandOutput,
  DescribeResourceScanCommand,
  DescribeGeneratedTemplateCommand,
  type DescribeGeneratedTemplateCommandOutput,
  type DescribeGeneratedTemplateCommandInput,
  GetGeneratedTemplateCommand,
  type GetGeneratedTemplateCommandOutput,
  type GetGeneratedTemplateCommandInput,
  CreateGeneratedTemplateCommand,
  type CreateGeneratedTemplateCommandOutput,
  type CreateGeneratedTemplateCommandInput,
  DeleteGeneratedTemplateCommand,
  type DeleteGeneratedTemplateCommandInput,
  type DeleteGeneratedTemplateCommandOutput,
  ListResourceScanRelatedResourcesCommand,
  type ListResourceScanRelatedResourcesCommandInput,
  type ListResourceScanRelatedResourcesCommandOutput,
  StartResourceScanCommand,
  type StartResourceScanCommandInput,
  type StartResourceScanCommandOutput,
  ListResourceScansCommand,
  type ListResourceScansCommandInput,
  type ListResourceScansCommandOutput,
  paginateDescribeStackEvents,
  paginateListStackResources,
  StackEvent,
  StackResourceSummary,
  RollbackStackCommandInput,
  RollbackStackCommandOutput,
  RollbackStackCommand,
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput,
  ContinueUpdateRollbackCommand,
} from '@aws-sdk/client-cloudformation';
import {
  CloudWatchLogsClient,
  DescribeLogGroupsCommand,
  FilterLogEventsCommandInput,
  type DescribeLogGroupsCommandInput,
  type DescribeLogGroupsCommandOutput,
  FilterLogEventsCommandOutput,
  FilterLogEventsCommand,
} from '@aws-sdk/client-cloudwatch-logs';
import {
  CodeBuildClient,
  type UpdateProjectCommandInput,
  type UpdateProjectCommandOutput,
  UpdateProjectCommand,
} from '@aws-sdk/client-codebuild';
import {
  EC2Client,
  type DescribeAvailabilityZonesCommandInput,
  type DescribeAvailabilityZonesCommandOutput,
  type DescribeImagesCommandInput,
  type DescribeImagesCommandOutput,
  type DescribeInstancesCommandInput,
  type DescribeInstancesCommandOutput,
  type DescribeRouteTablesCommandInput,
  type DescribeRouteTablesCommandOutput,
  type DescribeSecurityGroupsCommandInput,
  type DescribeSecurityGroupsCommandOutput,
  type DescribeSubnetsCommandInput,
  type DescribeSubnetsCommandOutput,
  type DescribeVpcEndpointServicesCommandInput,
  type DescribeVpcEndpointServicesCommandOutput,
  type DescribeVpcsCommandInput,
  type DescribeVpcsCommandOutput,
  type DescribeVpnGatewaysCommandInput,
  type DescribeVpnGatewaysCommandOutput,
  DescribeAvailabilityZonesCommand,
  DescribeImagesCommand,
  DescribeInstancesCommand,
  DescribeRouteTablesCommand,
  DescribeSecurityGroupsCommand,
  DescribeSubnetsCommand,
  DescribeVpcEndpointServicesCommand,
  DescribeVpcsCommand,
  DescribeVpnGatewaysCommand,
} from '@aws-sdk/client-ec2';
import {
  type CreateRepositoryCommandInput,
  type CreateRepositoryCommandOutput,
  type DescribeImagesCommandInput as ECRDescribeImagesCommandInput,
  type DescribeImagesCommandOutput as ECRDescribeImagesCommandOutput,
  DescribeImagesCommand as ECRDescribeImagesCommand,
  type DescribeRepositoriesCommandInput,
  type DescribeRepositoriesCommandOutput,
  type PutImageScanningConfigurationCommandInput,
  type PutImageScanningConfigurationCommandOutput,
  type GetAuthorizationTokenCommandInput,
  type GetAuthorizationTokenCommandOutput,
  ECRClient,
  CreateRepositoryCommand,
  DescribeRepositoriesCommand,
  GetAuthorizationTokenCommand,
  PutImageScanningConfigurationCommand,
} from '@aws-sdk/client-ecr';
import {
  ECSClient,
  ListClustersCommand,
  RegisterTaskDefinitionCommandInput,
  type ListClustersCommandInput,
  type ListClustersCommandOutput,
  type RegisterTaskDefinitionCommandOutput,
  RegisterTaskDefinitionCommand,
  type UpdateServiceCommandInput,
  type UpdateServiceCommandOutput,
  UpdateServiceCommand,
  DescribeServicesCommandInput,
  waitUntilServicesStable,
} from '@aws-sdk/client-ecs';
import {
  ElasticLoadBalancingV2Client,
  type DescribeListenersCommandInput,
  type DescribeListenersCommandOutput,
  type DescribeLoadBalancersCommandInput,
  type DescribeLoadBalancersCommandOutput,
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeListenersCommand,
  DescribeLoadBalancersCommand,
  DescribeTagsCommand,
  paginateDescribeListeners,
  paginateDescribeLoadBalancers,
  LoadBalancer,
  Listener,
} from '@aws-sdk/client-elastic-load-balancing-v2';
import {
  IAMClient,
  type CreatePolicyCommandInput,
  type CreatePolicyCommandOutput,
  type GetPolicyCommandInput,
  type GetPolicyCommandOutput,
  type GetRoleCommandInput,
  type GetRoleCommandOutput,
  CreatePolicyCommand,
  GetPolicyCommand,
  GetRoleCommand,
} from '@aws-sdk/client-iam';
import {
  KMSClient,
  type DescribeKeyCommandInput,
  type DescribeKeyCommandOutput,
  type ListAliasesCommandInput,
  type ListAliasesCommandOutput,
  DescribeKeyCommand,
  ListAliasesCommand,
} from '@aws-sdk/client-kms';
import {
  LambdaClient,
  type InvokeCommandInput,
  type InvokeCommandOutput,
  InvokeCommand,
  type UpdateFunctionCodeCommandInput,
  type UpdateFunctionCodeCommandOutput,
  type UpdateFunctionConfigurationCommandInput,
  type UpdateFunctionConfigurationCommandOutput,
  UpdateFunctionConfigurationCommand,
  UpdateFunctionCodeCommand,
  type PublishVersionCommandInput,
  type PublishVersionCommandOutput,
  PublishVersionCommand,
  type UpdateAliasCommandInput,
  type UpdateAliasCommandOutput,
  UpdateAliasCommand,
  waitUntilFunctionUpdated,
} from '@aws-sdk/client-lambda';
import {
  Route53Client,
  type GetHostedZoneCommandInput,
  type GetHostedZoneCommandOutput,
  type ListHostedZonesByNameCommandInput,
  type ListHostedZonesByNameCommandOutput,
  type ListHostedZonesCommandInput,
  type ListHostedZonesCommandOutput,
  GetHostedZoneCommand,
  ListHostedZonesCommand,
  ListHostedZonesByNameCommand,
} from '@aws-sdk/client-route-53';
import {
  type CompleteMultipartUploadCommandOutput,
  type GetBucketEncryptionCommandInput,
  type GetBucketEncryptionCommandOutput,
  GetBucketLocationCommand,
  type GetBucketLocationCommandInput,
  type GetBucketLocationCommandOutput,
  type GetObjectCommandInput,
  type GetObjectCommandOutput,
  ListObjectsV2Command,
  type ListObjectsV2CommandInput,
  type ListObjectsV2CommandOutput,
  type PutObjectCommandInput,
  S3Client,
  GetBucketEncryptionCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import {
  SecretsManagerClient,
  type GetSecretValueCommandInput,
  type GetSecretValueCommandOutput,
  GetSecretValueCommand,
} from '@aws-sdk/client-secrets-manager';
import {
  SFNClient,
  UpdateStateMachineCommandInput,
  UpdateStateMachineCommandOutput,
  UpdateStateMachineCommand,
} from '@aws-sdk/client-sfn';
import {
  SSMClient,
  type GetParameterCommandInput,
  type GetParameterCommandOutput,
  GetParameterCommand,
} from '@aws-sdk/client-ssm';
import { GetCallerIdentityCommand, STSClient } from '@aws-sdk/client-sts';
import { Upload } from '@aws-sdk/lib-storage';
import { getEndpointFromInstructions } from '@smithy/middleware-endpoint';
import type { NodeHttpHandlerOptions } from '@smithy/node-http-handler';
import { AwsCredentialIdentity, Logger } from '@smithy/types';
import { ConfiguredRetryStrategy } from '@smithy/util-retry';
import { WaiterResult } from '@smithy/util-waiter';
import { AccountAccessKeyCache } from './account-cache';
import { cached } from './cached';
import { Account } from './sdk-provider';
import { defaultCliUserAgent } from './user-agent';
import { debug } from '../../logging';
import { traceMethods } from '../../util/tracing';

/**
 * Additional SDK configuration options
 */
export interface SdkOptions {
  /**
   * Additional descriptive strings that indicate where the "AssumeRole" credentials are coming from
   *
   * Will be printed in an error message to help users diagnose auth problems.
   */
  readonly assumeRoleCredentialsSourceDescription?: string;
}

// TODO: still some cleanup here. Make the pagination functions do all the work here instead of in individual packages.
// Also add async/await. Does that actually matter in this context? Find out and update accordingly.

// Also add notes to the PR about why you imported everything individually and used 'type' so reviewers don't have to ask.

export interface ConfigurationOptions {
  region: string;
  credentials: AwsCredentialIdentity;
  requestHandler: NodeHttpHandlerOptions;
  retryStrategy: ConfiguredRetryStrategy;
  customUserAgent: string;
  logger?: Logger;
}

export interface IAppSyncClient {
  getSchemaCreationStatus(input: GetSchemaCreationStatusCommandInput): Promise<GetSchemaCreationStatusCommandOutput>;
  startSchemaCreation(input: StartSchemaCreationCommandInput): Promise<StartSchemaCreationCommandOutput>;
  updateApiKey(input: UpdateApiKeyCommandInput): Promise<UpdateApiKeyCommandOutput>;
  updateFunction(input: UpdateFunctionCommandInput): Promise<UpdateFunctionCommandOutput>;
  updateResolver(input: UpdateResolverCommandInput): Promise<UpdateResolverCommandOutput>;
  // Pagination functions
  listFunctions(input: ListFunctionsCommandInput): Promise<FunctionConfiguration[]>;
}

export interface ICloudFormationClient {
  continueUpdateRollback(input: ContinueUpdateRollbackCommandInput): Promise<ContinueUpdateRollbackCommandOutput>;
  createChangeSet(input: CreateChangeSetCommandInput): Promise<CreateChangeSetCommandOutput>;
  createGeneratedTemplate(input: CreateGeneratedTemplateCommandInput): Promise<CreateGeneratedTemplateCommandOutput>;
  createStack(input: CreateStackCommandInput): Promise<CreateStackCommandOutput>;
  deleteChangeSet(input: DeleteChangeSetCommandInput): Promise<DeleteChangeSetCommandOutput>;
  deleteGeneratedTemplate(input: DeleteGeneratedTemplateCommandInput): Promise<DeleteGeneratedTemplateCommandOutput>;
  deleteStack(input: DeleteStackCommandInput): Promise<DeleteStackCommandOutput>;
  describeChangeSet(input: DescribeChangeSetCommandInput): Promise<DescribeChangeSetCommandOutput>;
  describeGeneratedTemplate(
    input: DescribeGeneratedTemplateCommandInput,
  ): Promise<DescribeGeneratedTemplateCommandOutput>;
  describeResourceScan(input: DescribeResourceScanCommandInput): Promise<DescribeResourceScanCommandOutput>;
  describeStacks(input: DescribeStacksCommandInput): Promise<DescribeStacksCommandOutput>;
  executeChangeSet(input: ExecuteChangeSetCommandInput): Promise<ExecuteChangeSetCommandOutput>;
  getGeneratedTemplate(input: GetGeneratedTemplateCommandInput): Promise<GetGeneratedTemplateCommandOutput>;
  getTemplate(input: GetTemplateCommandInput): Promise<GetTemplateCommandOutput>;
  getTemplateSummary(input: GetTemplateSummaryCommandInput): Promise<GetTemplateSummaryCommandOutput>;
  listExports(input: ListExportsCommandInput): Promise<ListExportsCommandOutput>;
  listResourceScanRelatedResources(
    input: ListResourceScanRelatedResourcesCommandInput,
  ): Promise<ListResourceScanRelatedResourcesCommandOutput>;
  listResourceScanResources(
    input: ListResourceScanResourcesCommandInput,
  ): Promise<ListResourceScanResourcesCommandOutput>;
  listResourceScans(input?: ListResourceScansCommandInput): Promise<ListResourceScansCommandOutput>;
  rollbackStack(input: RollbackStackCommandInput): Promise<RollbackStackCommandOutput>;
  startResourceScan(input: StartResourceScanCommandInput): Promise<StartResourceScanCommandOutput>;
  updateStack(input: UpdateStackCommandInput): Promise<UpdateStackCommandOutput>;
  updateTerminationProtection(
    input: UpdateTerminationProtectionCommandInput,
  ): Promise<UpdateTerminationProtectionCommandOutput>;
  // Pagination functions
  describeStackEvents(input: DescribeStackEventsCommandInput): Promise<StackEvent[]>;
  listStackResources(input: ListStackResourcesCommandInput): Promise<StackResourceSummary[]>;
}

export interface ICloudWatchLogsClient {
  describeLogGroups(input: DescribeLogGroupsCommandInput): Promise<DescribeLogGroupsCommandOutput>;
  filterLogEvents(input: FilterLogEventsCommandInput): Promise<FilterLogEventsCommandOutput>;
}

export interface ICodeBuildClient {
  updateProject(input: UpdateProjectCommandInput): Promise<UpdateProjectCommandOutput>;
}
export interface IEC2Client {
  describeAvailabilityZones(
    input: DescribeAvailabilityZonesCommandInput,
  ): Promise<DescribeAvailabilityZonesCommandOutput>;
  describeImages(input: DescribeImagesCommandInput): Promise<DescribeImagesCommandOutput>;
  describeInstances(input: DescribeInstancesCommandInput): Promise<DescribeInstancesCommandOutput>;
  describeRouteTables(input: DescribeRouteTablesCommandInput): Promise<DescribeRouteTablesCommandOutput>;
  describeSecurityGroups(input: DescribeSecurityGroupsCommandInput): Promise<DescribeSecurityGroupsCommandOutput>;
  describeSubnets(input: DescribeSubnetsCommandInput): Promise<DescribeSubnetsCommandOutput>;
  describeVpcEndpointServices(
    input: DescribeVpcEndpointServicesCommandInput,
  ): Promise<DescribeVpcEndpointServicesCommandOutput>;
  describeVpcs(input: DescribeVpcsCommandInput): Promise<DescribeVpcsCommandOutput>;
  describeVpnGateways(input: DescribeVpnGatewaysCommandInput): Promise<DescribeVpnGatewaysCommandOutput>;
}

export interface IECRClient {
  createRepository(input: CreateRepositoryCommandInput): Promise<CreateRepositoryCommandOutput>;
  describeImages(input: ECRDescribeImagesCommandInput): Promise<ECRDescribeImagesCommandOutput>;
  describeRepositories(input: DescribeRepositoriesCommandInput): Promise<DescribeRepositoriesCommandOutput>;
  getAuthorizationToken(input: GetAuthorizationTokenCommandInput): Promise<GetAuthorizationTokenCommandOutput>;
  putImageScanningConfiguration(
    input: PutImageScanningConfigurationCommandInput,
  ): Promise<PutImageScanningConfigurationCommandOutput>;
}

export interface IECSClient {
  listClusters(input: ListClustersCommandInput): Promise<ListClustersCommandOutput>;
  registerTaskDefinition(input: RegisterTaskDefinitionCommandInput): Promise<RegisterTaskDefinitionCommandOutput>;
  updateService(input: UpdateServiceCommandInput): Promise<UpdateServiceCommandOutput>;
  // Waiters
  waitUntilServicesStable(input: DescribeServicesCommandInput): Promise<WaiterResult>;
}

export interface IElasticLoadBalancingV2Client {
  describeListeners(input: DescribeListenersCommandInput): Promise<DescribeListenersCommandOutput>;
  describeLoadBalancers(input: DescribeLoadBalancersCommandInput): Promise<DescribeLoadBalancersCommandOutput>;
  describeTags(input: DescribeTagsCommandInput): Promise<DescribeTagsCommandOutput>;
  // Pagination
  paginateDescribeListeners(input: DescribeListenersCommandInput): Promise<Listener[]>;
  paginateDescribeLoadBalancers(input: DescribeLoadBalancersCommandInput): Promise<LoadBalancer[]>;
}

export interface IIAMClient {
  createPolicy(input: CreatePolicyCommandInput): Promise<CreatePolicyCommandOutput>;
  getPolicy(input: GetPolicyCommandInput): Promise<GetPolicyCommandOutput>;
  getRole(input: GetRoleCommandInput): Promise<GetRoleCommandOutput>;
}

export interface IKMSClient {
  describeKey(input: DescribeKeyCommandInput): Promise<DescribeKeyCommandOutput>;
  listAliases(input: ListAliasesCommandInput): Promise<ListAliasesCommandOutput>;
}

export interface ILambdaClient {
  invokeCommand(input: InvokeCommandInput): Promise<InvokeCommandOutput>;
  publishVersion(input: PublishVersionCommandInput): Promise<PublishVersionCommandOutput>;
  updateAlias(input: UpdateAliasCommandInput): Promise<UpdateAliasCommandOutput>;
  updateFunctionCode(input: UpdateFunctionCodeCommandInput): Promise<UpdateFunctionCodeCommandOutput>;
  updateFunctionConfiguration(
    input: UpdateFunctionConfigurationCommandInput,
  ): Promise<UpdateFunctionConfigurationCommandOutput>;
  // Waiters
  waitUntilFunctionUpdated(delaySeconds: number, input: UpdateFunctionConfigurationCommandInput): Promise<WaiterResult>;
}

export interface IRoute53Client {
  getHostedZone(input: GetHostedZoneCommandInput): Promise<GetHostedZoneCommandOutput>;
  listHostedZones(input: ListHostedZonesCommandInput): Promise<ListHostedZonesCommandOutput>;
  listHostedZonesByName(input: ListHostedZonesByNameCommandInput): Promise<ListHostedZonesByNameCommandOutput>;
}

export interface IS3Client {
  getBucketEncryption(input: GetBucketEncryptionCommandInput): Promise<GetBucketEncryptionCommandOutput>;
  getBucketLocation(input: GetBucketLocationCommandInput): Promise<GetBucketLocationCommandOutput>;
  getObject(input: GetObjectCommandInput): Promise<GetObjectCommandOutput>;
  listObjectsV2(input: ListObjectsV2CommandInput): Promise<ListObjectsV2CommandOutput>;
  upload(input: PutObjectCommandInput): Promise<CompleteMultipartUploadCommandOutput>;
}

export interface ISecretsManagerClient {
  getSecretValue(input: GetSecretValueCommandInput): Promise<GetSecretValueCommandOutput>;
}

export interface ISSMClient {
  getParameter(input: GetParameterCommandInput): Promise<GetParameterCommandOutput>;
}

export interface IStepFunctionsClient {
  updateStateMachine(input: UpdateStateMachineCommandInput): Promise<UpdateStateMachineCommandOutput>;
}

/**
 * Base functionality of SDK without credential fetching
 */
@traceMethods
export class SDK {
  private static readonly accountCache = new AccountAccessKeyCache();

  public readonly currentRegion: string;

  public readonly config: ConfigurationOptions;

  /**
   * STS is used to check credential validity, don't do too many retries.
   */
  private readonly stsRetryOptions = {
    maxRetries: 3,
    retryDelayOptions: { base: 100 },
  };

  /**
   * Whether we have proof that the credentials have not expired
   *
   * We need to do some manual plumbing around this because the JS SDKv2 treats `ExpiredToken`
   * as retriable and we have hefty retries on CFN calls making the CLI hang for a good 15 minutes
   * if the credentials have expired.
   */
  private _credentialsValidated = false;

  constructor(
    private readonly _credentials: AwsCredentialIdentity,
    region: string,
    requestHandler: NodeHttpHandlerOptions,
    private readonly sdkOptions: SdkOptions = {},
  ) {
    this.config = {
      region,
      credentials: _credentials,
      requestHandler,
      retryStrategy: new ConfiguredRetryStrategy(7, (attempt) => attempt ** 300),
      customUserAgent: defaultCliUserAgent(),
    };
    this.currentRegion = region;
  }

  public appendCustomUserAgent(userAgentData?: string): void {
    if (!userAgentData) {
      return;
    }

    const currentCustomUserAgent = this.config.customUserAgent;
    this.config.customUserAgent = currentCustomUserAgent ? `${currentCustomUserAgent} ${userAgentData}` : userAgentData;
  }

  public removeCustomUserAgent(userAgentData: string): void {
    this.config.customUserAgent = this.config.customUserAgent?.replace(userAgentData, '');
  }

  public appsync(): IAppSyncClient {
    const client = new AppSyncClient(this.config);
    return {
      getSchemaCreationStatus: (
        input: GetSchemaCreationStatusCommandInput,
      ): Promise<GetSchemaCreationStatusCommandOutput> => client.send(new GetSchemaCreationStatusCommand(input)),
      startSchemaCreation: (input: StartSchemaCreationCommandInput): Promise<StartSchemaCreationCommandOutput> =>
        client.send(new StartSchemaCreationCommand(input)),
      updateApiKey: (input: UpdateApiKeyCommandInput): Promise<UpdateApiKeyCommandOutput> =>
        client.send(new UpdateApiKeyCommand(input)),
      updateFunction: (input: UpdateFunctionCommandInput): Promise<UpdateFunctionCommandOutput> =>
        client.send(new UpdateFunctionCommand(input)),
      updateResolver: (input: UpdateResolverCommandInput): Promise<UpdateResolverCommandOutput> =>
        client.send(new UpdateResolverCommand(input)),

      // Pagination Functions
      listFunctions: async (input: ListFunctionsCommandInput): Promise<FunctionConfiguration[]> => {
        const functions = Array<FunctionConfiguration>();
        const paginator = paginateListFunctions({ client }, input);
        for await (const page of paginator) {
          functions.push(...(page.functions || []));
        }
        return functions;
      },
    };
  }

  public cloudFormation(): ICloudFormationClient {
    const client = new CloudFormationClient({
      ...this.config,
      retryStrategy: new ConfiguredRetryStrategy(11, (attempt: number) => attempt ** 1000),
    });
    return {
      continueUpdateRollback: async (
        input: ContinueUpdateRollbackCommandInput,
      ): Promise<ContinueUpdateRollbackCommandOutput> => client.send(new ContinueUpdateRollbackCommand(input)),
      createChangeSet: (input: CreateChangeSetCommandInput): Promise<CreateChangeSetCommandOutput> =>
        client.send(new CreateChangeSetCommand(input)),
      createGeneratedTemplate: (
        input: CreateGeneratedTemplateCommandInput,
      ): Promise<CreateGeneratedTemplateCommandOutput> => client.send(new CreateGeneratedTemplateCommand(input)),
      createStack: (input: CreateStackCommandInput): Promise<CreateStackCommandOutput> =>
        client.send(new CreateStackCommand(input)),
      deleteChangeSet: (input: DeleteChangeSetCommandInput): Promise<DeleteChangeSetCommandOutput> =>
        client.send(new DeleteChangeSetCommand(input)),
      deleteGeneratedTemplate: (
        input: DeleteGeneratedTemplateCommandInput,
      ): Promise<DeleteGeneratedTemplateCommandOutput> => client.send(new DeleteGeneratedTemplateCommand(input)),
      deleteStack: (input: DeleteStackCommandInput): Promise<DeleteStackCommandOutput> =>
        client.send(new DeleteStackCommand(input)),
      describeChangeSet: (input: DescribeChangeSetCommandInput): Promise<DescribeChangeSetCommandOutput> =>
        client.send(new DescribeChangeSetCommand(input)),
      describeGeneratedTemplate: (
        input: DescribeGeneratedTemplateCommandInput,
      ): Promise<DescribeGeneratedTemplateCommandOutput> => client.send(new DescribeGeneratedTemplateCommand(input)),
      describeResourceScan: (input: DescribeResourceScanCommandInput): Promise<DescribeResourceScanCommandOutput> =>
        client.send(new DescribeResourceScanCommand(input)),
      describeStacks: (input: DescribeStacksCommandInput): Promise<DescribeStacksCommandOutput> =>
        client.send(new DescribeStacksCommand(input)),
      executeChangeSet: (input: ExecuteChangeSetCommandInput): Promise<ExecuteChangeSetCommandOutput> =>
        client.send(new ExecuteChangeSetCommand(input)),
      getGeneratedTemplate: (input: GetGeneratedTemplateCommandInput): Promise<GetGeneratedTemplateCommandOutput> =>
        client.send(new GetGeneratedTemplateCommand(input)),
      getTemplate: (input: GetTemplateCommandInput): Promise<GetTemplateCommandOutput> =>
        client.send(new GetTemplateCommand(input)),
      getTemplateSummary: (input: GetTemplateSummaryCommandInput): Promise<GetTemplateSummaryCommandOutput> =>
        client.send(new GetTemplateSummaryCommand(input)),
      listExports: (input: ListExportsCommandInput): Promise<ListExportsCommandOutput> =>
        client.send(new ListExportsCommand(input)),
      listResourceScanRelatedResources: (
        input: ListResourceScanRelatedResourcesCommandInput,
      ): Promise<ListResourceScanRelatedResourcesCommandOutput> =>
        client.send(new ListResourceScanRelatedResourcesCommand(input)),
      listResourceScanResources: (
        input: ListResourceScanResourcesCommandInput,
      ): Promise<ListResourceScanResourcesCommandOutput> => client.send(new ListResourceScanResourcesCommand(input)),
      listResourceScans: (input: ListResourceScansCommandInput): Promise<ListResourceScansCommandOutput> =>
        client.send(new ListResourceScansCommand(input)),
      rollbackStack: (input: RollbackStackCommandInput): Promise<RollbackStackCommandOutput> =>
        client.send(new RollbackStackCommand(input)),
      startResourceScan: (input: StartResourceScanCommandInput): Promise<StartResourceScanCommandOutput> =>
        client.send(new StartResourceScanCommand(input)),
      updateStack: (input: UpdateStackCommandInput): Promise<UpdateStackCommandOutput> =>
        client.send(new UpdateStackCommand(input)),
      updateTerminationProtection: (
        input: UpdateTerminationProtectionCommandInput,
      ): Promise<UpdateTerminationProtectionCommandOutput> =>
        client.send(new UpdateTerminationProtectionCommand(input)),
      describeStackEvents: async (input: DescribeStackEventsCommandInput): Promise<StackEvent[]> => {
        const stackEvents = Array<StackEvent>();
        const paginator = paginateDescribeStackEvents({ client }, input);
        for await (const page of paginator) {
          stackEvents.push(...(page?.StackEvents || []));
        }
        return stackEvents;
      },
      listStackResources: async (input: ListStackResourcesCommandInput): Promise<StackResourceSummary[]> => {
        const stackResources = Array<StackResourceSummary>();
        const paginator = paginateListStackResources({ client }, input);
        for await (const page of paginator) {
          stackResources.push(...(page?.StackResourceSummaries || []));
        }
        return stackResources;
      },
    };
  }

  public cloudWatchLogs(): ICloudWatchLogsClient {
    const client = new CloudWatchLogsClient(this.config);
    return {
      describeLogGroups: (input: DescribeLogGroupsCommandInput): Promise<DescribeLogGroupsCommandOutput> =>
        client.send(new DescribeLogGroupsCommand(input)),
      filterLogEvents: (input: FilterLogEventsCommandInput): Promise<FilterLogEventsCommandOutput> =>
        client.send(new FilterLogEventsCommand(input)),
    };
  }

  public codeBuild(): ICodeBuildClient {
    const client = this.wrapServiceErrorHandling(new CodeBuildClient(this.config));
    return {
      updateProject: (input: UpdateProjectCommandInput): Promise<UpdateProjectCommandOutput> =>
        client.send(new UpdateProjectCommand(input)),
    };
  }

  public ec2(): IEC2Client {
    const client = this.wrapServiceErrorHandling(new EC2Client(this.config));
    return {
      describeAvailabilityZones: (
        input: DescribeAvailabilityZonesCommandInput,
      ): Promise<DescribeAvailabilityZonesCommandOutput> => client.send(new DescribeAvailabilityZonesCommand(input)),
      describeImages: (input: DescribeImagesCommandInput): Promise<DescribeImagesCommandOutput> =>
        client.send(new DescribeImagesCommand(input)),
      describeInstances: (input: DescribeInstancesCommandInput): Promise<DescribeInstancesCommandOutput> =>
        client.send(new DescribeInstancesCommand(input)),
      describeRouteTables: (input: DescribeRouteTablesCommandInput): Promise<DescribeRouteTablesCommandOutput> =>
        client.send(new DescribeRouteTablesCommand(input)),
      describeSecurityGroups: (
        input: DescribeSecurityGroupsCommandInput,
      ): Promise<DescribeSecurityGroupsCommandOutput> => client.send(new DescribeSecurityGroupsCommand(input)),
      describeSubnets: (input: DescribeSubnetsCommandInput): Promise<DescribeSubnetsCommandOutput> =>
        client.send(new DescribeSubnetsCommand(input)),
      describeVpcEndpointServices: (
        input: DescribeVpcEndpointServicesCommandInput,
      ): Promise<DescribeVpcEndpointServicesCommandOutput> =>
        client.send(new DescribeVpcEndpointServicesCommand(input)),
      describeVpcs: (input: DescribeVpcsCommandInput): Promise<DescribeVpcsCommandOutput> =>
        client.send(new DescribeVpcsCommand(input)),
      describeVpnGateways: (input: DescribeVpnGatewaysCommandInput): Promise<DescribeVpnGatewaysCommandOutput> =>
        client.send(new DescribeVpnGatewaysCommand(input)),
    };
  }

  public ecr(): IECRClient {
    const client = this.wrapServiceErrorHandling(new ECRClient(this.config));
    return {
      createRepository: (input: CreateRepositoryCommandInput): Promise<CreateRepositoryCommandOutput> =>
        client.send(new CreateRepositoryCommand(input)),
      describeImages: (input: ECRDescribeImagesCommandInput): Promise<ECRDescribeImagesCommandOutput> =>
        client.send(new ECRDescribeImagesCommand(input)),
      describeRepositories: (input: DescribeRepositoriesCommandInput): Promise<DescribeRepositoriesCommandOutput> =>
        client.send(new DescribeRepositoriesCommand(input)),
      getAuthorizationToken: (input: GetAuthorizationTokenCommandInput): Promise<GetAuthorizationTokenCommandOutput> =>
        client.send(new GetAuthorizationTokenCommand(input)),
      putImageScanningConfiguration: (
        input: PutImageScanningConfigurationCommandInput,
      ): Promise<PutImageScanningConfigurationCommandOutput> =>
        client.send(new PutImageScanningConfigurationCommand(input)),
    };
  }

  public ecs(): IECSClient {
    const client = this.wrapServiceErrorHandling(new ECSClient(this.config));
    return {
      listClusters: (input: ListClustersCommandInput): Promise<ListClustersCommandOutput> =>
        client.send(new ListClustersCommand(input)),
      registerTaskDefinition: (
        input: RegisterTaskDefinitionCommandInput,
      ): Promise<RegisterTaskDefinitionCommandOutput> => client.send(new RegisterTaskDefinitionCommand(input)),
      updateService: (input: UpdateServiceCommandInput): Promise<UpdateServiceCommandOutput> =>
        client.send(new UpdateServiceCommand(input)),
      // Waiters
      waitUntilServicesStable: (input: DescribeServicesCommandInput): Promise<WaiterResult> => {
        return waitUntilServicesStable(
          {
            client,
            maxWaitTime: 600,
            minDelay: 6,
            maxDelay: 6,
          },
          input,
        );
      },
    };
  }

  public elbv2(): IElasticLoadBalancingV2Client {
    const client = this.wrapServiceErrorHandling(new ElasticLoadBalancingV2Client(this.config));
    return {
      describeListeners: (input: DescribeListenersCommandInput): Promise<DescribeListenersCommandOutput> =>
        client.send(new DescribeListenersCommand(input)),
      describeLoadBalancers: (input: DescribeLoadBalancersCommandInput): Promise<DescribeLoadBalancersCommandOutput> =>
        client.send(new DescribeLoadBalancersCommand(input)),
      describeTags: (input: DescribeTagsCommandInput): Promise<DescribeTagsCommandOutput> =>
        client.send(new DescribeTagsCommand(input)),
      // Pagination Functions
      paginateDescribeListeners: async (input: DescribeListenersCommandInput): Promise<Listener[]> => {
        const listeners = Array<Listener>();
        const paginator = paginateDescribeListeners({ client }, input);
        for await (const page of paginator) {
          listeners.push(...(page?.Listeners || []));
        }
        return listeners;
      },
      paginateDescribeLoadBalancers: async (input: DescribeLoadBalancersCommandInput): Promise<LoadBalancer[]> => {
        const loadBalancers = Array<LoadBalancer>();
        const paginator = paginateDescribeLoadBalancers({ client }, input);
        for await (const page of paginator) {
          loadBalancers.push(...(page?.LoadBalancers || []));
        }
        return loadBalancers;
      },
    };
  }

  public iam(): IIAMClient {
    const client = this.wrapServiceErrorHandling(new IAMClient(this.config));
    return {
      createPolicy: (input: CreatePolicyCommandInput): Promise<CreatePolicyCommandOutput> =>
        client.send(new CreatePolicyCommand(input)),
      getPolicy: (input: GetPolicyCommandInput): Promise<GetPolicyCommandOutput> =>
        client.send(new GetPolicyCommand(input)),
      getRole: (input: GetRoleCommandInput): Promise<GetRoleCommandOutput> => client.send(new GetRoleCommand(input)),
    };
  }

  public kms(): IKMSClient {
    const client = this.wrapServiceErrorHandling(new KMSClient(this.config));
    return {
      describeKey: (input: DescribeKeyCommandInput): Promise<DescribeKeyCommandOutput> =>
        client.send(new DescribeKeyCommand(input)),
      listAliases: (input: ListAliasesCommandInput): Promise<ListAliasesCommandOutput> =>
        client.send(new ListAliasesCommand(input)),
    };
  }

  public lambda(): ILambdaClient {
    const client = this.wrapServiceErrorHandling(new LambdaClient(this.config));
    return {
      invokeCommand: (input: InvokeCommandInput): Promise<InvokeCommandOutput> => client.send(new InvokeCommand(input)),
      publishVersion: (input: PublishVersionCommandInput): Promise<PublishVersionCommandOutput> =>
        client.send(new PublishVersionCommand(input)),
      updateAlias: (input: UpdateAliasCommandInput): Promise<UpdateAliasCommandOutput> =>
        client.send(new UpdateAliasCommand(input)),
      updateFunctionCode: (input: UpdateFunctionCodeCommandInput): Promise<UpdateFunctionCodeCommandOutput> =>
        client.send(new UpdateFunctionCodeCommand(input)),
      updateFunctionConfiguration: (
        input: UpdateFunctionConfigurationCommandInput,
      ): Promise<UpdateFunctionConfigurationCommandOutput> =>
        client.send(new UpdateFunctionConfigurationCommand(input)),
      // Waiters
      waitUntilFunctionUpdated: (
        delaySeconds: number,
        input: UpdateFunctionConfigurationCommandInput,
      ): Promise<WaiterResult> => {
        return waitUntilFunctionUpdated(
          {
            client,
            maxDelay: delaySeconds,
            minDelay: delaySeconds,
            maxWaitTime: delaySeconds * 60,
          },
          input,
        );
      },
    };
  }

  public route53(): IRoute53Client {
    const client = this.wrapServiceErrorHandling(new Route53Client(this.config));
    return {
      getHostedZone: (input: GetHostedZoneCommandInput): Promise<GetHostedZoneCommandOutput> =>
        client.send(new GetHostedZoneCommand(input)),
      listHostedZones: (input: ListHostedZonesCommandInput): Promise<ListHostedZonesCommandOutput> =>
        client.send(new ListHostedZonesCommand(input)),
      listHostedZonesByName: (input: ListHostedZonesByNameCommandInput): Promise<ListHostedZonesByNameCommandOutput> =>
        client.send(new ListHostedZonesByNameCommand(input)),
    };
  }

  public s3(): IS3Client {
    const client = this.wrapServiceErrorHandling(new S3Client(this.config));
    return {
      getBucketEncryption: (input: GetBucketEncryptionCommandInput): Promise<GetBucketEncryptionCommandOutput> =>
        client.send(new GetBucketEncryptionCommand(input)),
      getBucketLocation: (input: GetBucketLocationCommandInput): Promise<GetBucketLocationCommandOutput> =>
        client.send(new GetBucketLocationCommand(input)),
      getObject: (input: GetObjectCommandInput): Promise<GetObjectCommandOutput> =>
        client.send(new GetObjectCommand(input)),
      listObjectsV2: (input: ListObjectsV2CommandInput): Promise<ListObjectsV2CommandOutput> =>
        client.send(new ListObjectsV2Command(input)),
      upload: (input: PutObjectCommandInput): Promise<CompleteMultipartUploadCommandOutput> => {
        try {
          const upload = new Upload({
            client,
            params: input,
          });

          return upload.done();
        } catch (e: any) {
          throw new Error(`Upload failed: ${e.message}`);
        }
      },
    };
  }

  public secretsManager(): ISecretsManagerClient {
    const client = this.wrapServiceErrorHandling(new SecretsManagerClient(this.config));
    return {
      getSecretValue: (input: GetSecretValueCommandInput): Promise<GetSecretValueCommandOutput> =>
        client.send(new GetSecretValueCommand(input)),
    };
  }

  public ssm(): ISSMClient {
    const client = this.wrapServiceErrorHandling(new SSMClient(this.config));
    return {
      getParameter: (input: GetParameterCommandInput): Promise<GetParameterCommandOutput> =>
        client.send(new GetParameterCommand(input)),
    };
  }

  public stepFunctions(): IStepFunctionsClient {
    const client = this.wrapServiceErrorHandling(new SFNClient(this.config));
    return {
      updateStateMachine: (input: UpdateStateMachineCommandInput): Promise<UpdateStateMachineCommandOutput> =>
        client.send(new UpdateStateMachineCommand(input)),
    };
  }

  /**
   * The AWS SDK v3 requires a client config and a command in order to get an endpoint for
   * any given service.
   */
  public async getUrlSuffix(region: string): Promise<string> {
    const cfn = new CloudFormationClient({ region });
    const endpoint = await getEndpointFromInstructions({}, DescribeStackResourcesCommand, { ...cfn.config });
    return endpoint.url.hostname.split(`${region}.`).pop()!;
  }

  public async currentAccount(): Promise<Account> {
    return cached(this, CURRENT_ACCOUNT_KEY, () =>
      SDK.accountCache.fetch(this._credentials.accessKeyId, async () => {
        // if we don't have one, resolve from STS and store in cache.
        debug('Looking up default account ID from STS');
        const client = new STSClient({
          ...this.config,
          ...this.stsRetryOptions,
        });
        const command = new GetCallerIdentityCommand({});
        const result = await client.send(command);
        debug(result.Account!, result.Arn, result.UserId);
        const accountId = result.Account;
        const partition = result.Arn!.split(':')[1];
        if (!accountId) {
          throw new Error("STS didn't return an account ID");
        }
        debug('Default account ID:', accountId);

        // Save another STS call later if this one already succeeded
        this._credentialsValidated = true;
        return { accountId, partition };
      }),
    );
  }

  /**
   * Make sure the the current credentials are not expired
   */
  public async validateCredentials() {
    if (this._credentialsValidated) {
      return;
    }

    const client = new STSClient({ ...this.config, ...this.stsRetryOptions });
    await client.send(new GetCallerIdentityCommand({}));
    this._credentialsValidated = true;
  }

  /**
   * Return a wrapping object for the underlying service object
   *
   * Responds to failures in the underlying service calls, in two different
   * ways:
   *
   * - When errors are encountered, log the failing call and the error that
   *   it triggered (at debug level). This is necessary because the lack of
   *   stack traces in NodeJS otherwise makes it very hard to suss out where
   *   a certain AWS error occurred.
   * - The JS SDK has a funny business of wrapping any credential-based error
   *   in a super-generic (and in our case wrong) exception. If we then use a
   *   'ChainableTemporaryCredentials' and the target role doesn't exist,
   *   the error message that shows up by default is super misleading
   *   (https://github.com/aws/aws-sdk-js/issues/3272). We can fix this because
   *   the exception contains the "inner exception", so we unwrap and throw
   *   the correct error ("cannot assume role").
   *
   * The wrapping business below is slightly more complicated than you'd think
   * because we must hook into the `promise()` method of the object that's being
   * returned from the methods of the object that we wrap, so there's two
   * levels of wrapping going on, and also some exceptions to the wrapping magic.
   */
  private wrapServiceErrorHandling<A extends object>(serviceObject: A): A {
    const classObject = serviceObject.constructor.prototype;
    const self = this;

    return new Proxy(serviceObject, {
      get(obj: A, prop: string) {
        const real = (obj as any)[prop];
        // Things we don't want to intercept:
        // - Anything that's not a function.
        // - 'constructor', s3.upload() will use this to do some magic and we need the underlying constructor.
        // - Any method that's not on the service class (do not intercept 'makeRequest' and other helpers).
        if (prop === 'constructor' || !classObject.hasOwnProperty(prop) || !isFunction(real)) {
          return real;
        }

        // NOTE: This must be a function() and not an () => {
        // because I need 'this' to be dynamically bound and not statically bound.
        // If your linter complains don't listen to it!
        return function (this: any) {
          // Call the underlying function. If it returns an object with a promise()
          // method on it, wrap that 'promise' method.
          const args = [].slice.call(arguments, 0);
          const response = real.apply(this, args);

          // Don't intercept unless the return value is an object with a '.promise()' method.
          if (typeof response !== 'object' || !response) {
            return response;
          }
          if (!('promise' in response)) {
            return response;
          }

          // Return an object with the promise method replaced with a wrapper which will
          // do additional things to errors.
          return Object.assign(Object.create(response), {
            promise() {
              return response.catch((e: Error & { code?: string }) => {
                e = self.makeDetailedException(e);
                debug(`Call failed: ${prop}(${JSON.stringify(args[0])}) => ${e.message} (code=${e.name})`);
                return Promise.reject(e); // Re-'throw' the new error
              });
            },
          });
        };
      },
    });
  }

  /**
   * Extract a more detailed error out of a generic error if we can
   *
   * If this is an error about Assuming Roles, add in the context showing the
   * chain of credentials we used to try to assume the role.
   */
  private makeDetailedException(e: Error): Error {
    // This is the super-generic "something's wrong" error that the JS SDK wraps other errors in.
    // https://github.com/aws/aws-sdk-js/blob/f0ac2e53457c7512883d0677013eacaad6cd8a19/lib/event_listeners.js#L84
    if (typeof e.message === 'string' && e.message.startsWith('Missing credentials in config')) {
      const original = (e as any).originalError;
      if (original) {
        // When the SDK does a 'util.copy', they lose the Error-ness of the inner error
        // (they copy the Error's properties into a plain object) so make it an Error object again.
        e = Object.assign(new Error(), original);
      }
    }

    // At this point, the error might still be a generic "ChainableTemporaryCredentials failed"
    // error which wraps the REAL error (AssumeRole failed). We're going to replace the error
    // message with one that's more likely to help users, and tell them the most probable
    // fix (bootstrapping). The underlying service call failure will be appended below.
    if (e.message === 'Could not load credentials from ChainableTemporaryCredentials') {
      e.message = [
        'Could not assume role in target account',
        ...(this.sdkOptions.assumeRoleCredentialsSourceDescription
          ? [`using ${this.sdkOptions.assumeRoleCredentialsSourceDescription}`]
          : []),
        "(did you bootstrap the environment with the right '--trust's?)",
      ].join(' ');
    }

    // Replace the message on this error with a concatenation of all inner error messages.
    // Must more clear what's going on that way.
    e.message = allChainedExceptionMessages(e);
    return e;
  }
}

const CURRENT_ACCOUNT_KEY = Symbol('current_account_key');

function isFunction(x: any): x is (...args: any[]) => any {
  return x && {}.toString.call(x) === '[object Function]';
}

/**
 * Return the concatenated message of all exceptions in the AWS exception chain
 */
function allChainedExceptionMessages(e: Error | undefined) {
  const ret = new Array<string>();
  while (e) {
    ret.push(e.message);
    e = (e as any).originalError;
  }
  return ret.join(': ');
}
